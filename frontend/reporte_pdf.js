/**
 * ═══════════════════════════════════════════════════════
 *  TALENT · OnePager — Generador de PDF en el navegador
 *  Requiere: jsPDF (cargado antes de este script)
 *  Uso:
 *    ReportePDF.individual(empleado)         → descarga 1 PDF
 *    ReportePDF.masivo(listaEmpleados)       → descarga PDF multipágina
 *    ReportePDF.masivo(lista, "Área Comercial") → filtra por área
 * ═══════════════════════════════════════════════════════
 */

const ReportePDF = (() => {

  /* ── Paleta ── */
  const C = {
    bg:      [11,  13,  20],
    surface: [18,  21,  31],
    surf2:   [24,  28,  42],
    border:  [30,  34,  53],
    text:    [221, 225, 239],
    muted:   [85,  93,  120],
    accent:  [124, 106, 247],
    green:   [52,  211, 153],
    yellow:  [251, 191, 36],
    red:     [248, 113, 113],
    pink:    [232, 121, 249],
    blue:    [129, 140, 248],
    orange:  [251, 146, 60],
    orange2: [249, 115, 22],
    slate:   [148, 163, 184],
    white:   [255, 255, 255],
  };

  const QUADRANTS = [
    {nombre:"Diamante en bruto",       color:C.pink,    r:0, c:0},
    {nombre:"Alto pot. a desarrollar", color:C.green,   r:0, c:1},
    {nombre:"Talento estrategico",     color:C.blue,    r:0, c:2},
    {nombre:"Contribucion inconsist.", color:C.red,     r:1, c:0},
    {nombre:"Empleado clave",          color:C.slate,   r:1, c:1},
    {nombre:"Estrella emergente",      color:C.accent,  r:1, c:2},
    {nombre:"Revision de ajuste",      color:[239,68,68],r:2,c:0},
    {nombre:"Confiable",               color:C.yellow,  r:2, c:1},
    {nombre:"Experto tecnico",         color:C.orange,  r:2, c:2},
  ];

  /* ── Helpers ── */
  function clasificar(des, pot) {
    const col  = des >= 67 ? 2 : des >= 34 ? 1 : 0;
    const fila = pot >= 67 ? 0 : pot >= 34 ? 1 : 2;
    return QUADRANTS.find(q => q.r === fila && q.c === col);
  }

  function iniciales(nombre) {
    return (nombre || "?").split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase();
  }

  function nivelColor(val, max=100) {
    const p = val / max;
    if (p >= 0.67) return C.green;
    if (p >= 0.34) return C.yellow;
    return C.red;
  }

  function promComp(emp) {
    const cs = emp.COMPETENCIAS || [];
    return cs.length ? cs.reduce((a,c) => a + c.puntaje, 0) / cs.length : 0;
  }

  function recomendacion(emp) {
    const q = clasificar(emp.PUNTAJE_DESEMPENO, emp.PUNTAJE_POTENCIAL).nombre;
    if (q.includes("Talento") || q.includes("Estrella"))
      return "Aceleracion: asignar proyectos estrategicos y mentoria ejecutiva.";
    if (q.includes("Alto pot") || q.includes("Diamante"))
      return "Desarrollo: potenciar competencias clave y aumentar desempeno.";
    if (q.includes("Confiable") || q.includes("Empleado"))
      return "Consolidacion: reforzar fortalezas y definir 1-2 competencias objetivo.";
    if (q.includes("Revision") || q.includes("Contribucion"))
      return "Intervencion urgente: plan de mejora con metas en 90 dias.";
    if (q.includes("Experto"))
      return "Retencion: reconocer expertise y crear ruta de especializacion.";
    return "Plan formativo y seguimiento cercano.";
  }

  function interpretacion(emp) {
    const des = emp.PUNTAJE_DESEMPENO, pot = emp.PUNTAJE_POTENCIAL;
    const nd = des>=67?"alto":des>=34?"medio":"bajo";
    const np = pot>=67?"alto":pot>=34?"medio":"bajo";
    const q = clasificar(des,pot).nombre;
    let desc = "";
    if (q.includes("Talento")||q.includes("Estrella")) desc="Perfil de alto impacto. Candidato a roles de mayor responsabilidad.";
    else if (q.includes("Alto pot")||q.includes("Diamante")) desc="Alto potencial identificado. Requiere plan de desarrollo acelerado.";
    else if (q.includes("Confiable")||q.includes("Empleado")) desc="Profesional estable. Cerrar 1-2 competencias clave y aumentar autonomia.";
    else if (q.includes("Revision")||q.includes("Contribucion")) desc="Perfil en alerta. Requiere intervencion y seguimiento cercano.";
    else if (q.includes("Experto")) desc="Experto tecnico consolidado. Valorar como mentor interno.";
    else desc="Perfil en desarrollo: priorizar plan formativo.";
    return { desc, pos: `Desempeno ${nd} · Potencial ${np}` };
  }

  function hoy() {
    return new Date().toLocaleDateString("es-CO", {day:"2-digit",month:"short",year:"numeric"});
  }

  /* ── jsPDF wrappers ── */
  function fill(doc, color)   { doc.setFillColor(...color); }
  function stroke(doc, color) { doc.setDrawColor(...color); }
  function textCol(doc, color){ doc.setTextColor(...color); }

  function rect(doc, x,y,w,h, fColor, sColor, lw=0.3) {
    if(fColor){ fill(doc,fColor); }
    if(sColor){ stroke(doc,sColor); doc.setLineWidth(lw); }
    if(fColor && sColor) doc.rect(x,y,w,h,"FD");
    else if(fColor)      doc.rect(x,y,w,h,"F");
    else if(sColor)      doc.rect(x,y,w,h,"S");
  }

  function roundRect(doc, x,y,w,h,r, fColor, sColor, lw=0.3) {
    if(fColor){ fill(doc,fColor); }
    if(sColor){ stroke(doc,sColor); doc.setLineWidth(lw); }
    const mode = fColor && sColor ? "FD" : fColor ? "F" : "S";
    doc.roundedRect(x,y,w,h,r,r,mode);
  }

  function circle(doc, cx,cy,r, fColor, sColor) {
    if(fColor){ fill(doc,fColor); }
    if(sColor){ stroke(doc,sColor); }
    const mode = fColor && sColor ? "FD" : fColor ? "F" : "S";
    doc.circle(cx,cy,r,mode);
  }

  function bar(doc, x,y,w,h, pct, color) {
    roundRect(doc, x,y,w,h, h/2, C.border, null);
    if(pct > 0){
      const fw = Math.max(h, w*Math.min(pct,1));
      roundRect(doc, x,y,fw,h, h/2, color, null);
    }
  }

  function wrapText(doc, text, maxW, fontSize, font="helvetica") {
    doc.setFont(font,"normal");
    doc.setFontSize(fontSize);
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const w of words) {
      const test = line ? line+" "+w : w;
      if (doc.getTextWidth(test) < maxW) { line = test; }
      else { if(line) lines.push(line); line = w; }
    }
    if(line) lines.push(line);
    return lines;
  }

  /**
   * Envuelve un texto reduciendo el tamano de fuente hasta que quepa en maxLines.
   * Si ni con el tamano minimo cabe, trunca la ultima linea con "...".
   * Devuelve { lines, fontSize }.
   */
  function fitTextBlock(doc, text, maxW, maxLines, startSize, minSize=5.5, font="helvetica") {
    let size = startSize;
    let lines = wrapText(doc, text, maxW, size, font);
    while (lines.length > maxLines && size > minSize) {
      size -= 0.5;
      lines = wrapText(doc, text, maxW, size, font);
    }
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      let last = lines[maxLines-1];
      doc.setFont(font,"normal"); doc.setFontSize(size);
      while (doc.getTextWidth(last+"...") > maxW && last.length > 3) {
        last = last.slice(0, -1);
      }
      lines[maxLines-1] = last + "...";
    }
    return { lines, fontSize: size };
  }

  function wrapLimited(doc, text, maxW, fontSize, maxLines, font="helvetica") {
    let lines = wrapText(doc, text, maxW, fontSize, font);
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      let last = lines[maxLines-1];
      doc.setFont(font,"normal"); doc.setFontSize(fontSize);
      while (doc.getTextWidth(last + "...") > maxW && last.length > 3) {
        last = last.slice(0, -1);
      }
      lines[maxLines-1] = last + "...";
    }
    return lines;
  }

  /* ── MINI 9-BOX ── */
  function draw9Box(doc, x, y, size, emp) {
    const cw = size/3, ch = size/3;
    const CELL_BG = [
      [[38,21,53],[22,32,56],[21,30,58]],
      [[42,30,30],[26,26,26],[30,42,18]],
      [[50,16,16],[35,24,16],[18,32,16]],
    ];
    const qdes = emp.PUNTAJE_DESEMPENO>=67?2:emp.PUNTAJE_DESEMPENO>=34?1:0;
    const qpot = emp.PUNTAJE_POTENCIAL>=67?0:emp.PUNTAJE_POTENCIAL>=34?1:2;

    for(let row=0;row<3;row++){
      for(let col=0;col<3;col++){
        const cx = x + col*cw;
        const cy = y + row*ch;
        const qdata = QUADRANTS.find(q=>q.r===row&&q.c===col);
        const bg = CELL_BG[row][col];

        // Fondo celda
        rect(doc, cx,cy,cw,ch, bg, C.border, 0.2);

        // Highlight celda activa
        if(row===qpot && col===qdes){
          const hc = [...qdata.color, 40];
          doc.setFillColor(qdata.color[0],qdata.color[1],qdata.color[2]);
          doc.setGState(new doc.GState({opacity:0.18}));
          doc.rect(cx,cy,cw,ch,"F");
          doc.setGState(new doc.GState({opacity:1}));
        }

        // Label
        doc.setFont("helvetica","bold");
        doc.setFontSize(4);
        textCol(doc, qdata.color);
        const label = qdata.nombre;
        doc.text(label, cx+1.5, cy+ch-2, {maxWidth: cw-3});

        // Dot del empleado
        if(row===qpot && col===qdes){
          const dcx = cx+cw/2, dcy = cy+ch/2;
          circle(doc, dcx,dcy,3, C.white, null);
          circle(doc, dcx,dcy,2, qdata.color, null);
        }
      }
    }

    // Ejes labels
    doc.setFont("helvetica","normal");
    doc.setFontSize(4.5);
    textCol(doc,C.muted);
    doc.text("Bajo", x, y+size+5);
    doc.text("Alto", x+size-8, y+size+5);
    doc.text("DESEMPENO", x+size/2-12, y+size+5);

    // Eje Y
    doc.saveGraphicsState();
    doc.setFontSize(4.5); textCol(doc,C.muted);
    doc.text("POTENCIAL", x-3, y+size/2, {angle:90});
    doc.restoreGraphicsState();
  }

  /* ══════════════════════════════════════════════════════
     DIBUJAR UNA PÁGINA COMPLETA
     ══════════════════════════════════════════════════════ */
  function dibujarPagina(doc, emp, empresa, medicion) {
    const W=210, H=297;   // A4 mm
    const PX=12, PY=8;    // padding

    const des = emp.PUNTAJE_DESEMPENO || 0;
    const pot = emp.PUNTAJE_POTENCIAL || 0;
    const qm  = clasificar(des, pot);
    const pc  = promComp(emp);
    const rec = recomendacion(emp);
    const {desc: interp, pos} = interpretacion(emp);
    const nivelD = nivelColor(des);
    const nivelP = nivelColor(pot);
    const comps  = emp.COMPETENCIAS || [];
    const forts  = comps.filter(c=>c.nivel==="Fortaleza").sort((a,b)=>b.puntaje-a.puntaje);
    const devs   = comps.filter(c=>c.nivel!=="Fortaleza").sort((a,b)=>a.puntaje-b.puntaje);

    /* ── FONDO ── */
    rect(doc, 0,0,W,H, C.bg, null);

    /* ══ HEADER ══ */
    const HH = 32;
    rect(doc, 0,0,W,HH, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,HH,W,HH);

    // Avatar circle
    const avR=10, avCX=PX+avR, avCY=HH/2;
    circle(doc, avCX,avCY,avR, qm.color, null);
    doc.setFont("helvetica","bold"); doc.setFontSize(9);
    textCol(doc,C.white);
    doc.text(iniciales(emp.NOMBRE), avCX, avCY+3, {align:"center"});

    // Nombre
    const nx = avCX+avR+5;
    doc.setFont("helvetica","bold"); doc.setFontSize(13);
    textCol(doc,C.white);
    doc.text((emp.NOMBRE||"").toUpperCase(), nx, HH/2-2);

    // Sub datos
    doc.setFont("helvetica","normal"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    const cargo_str = `${emp.CC||"—"} - ${emp.CARGO||"—"} · ${emp.GRUPO||"—"} · ${emp.AREA||"—"}`;
    doc.text(cargo_str, nx, HH/2+4);
    doc.text(`CC ${emp.CC||"—"} · Reporta a ${emp.REPORTA_A||"—"}`, nx, HH/2+9);

    // Badge esquina derecha
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,qm.color);
    doc.text("EVALUACION COMPLETA", W-PX, 10, {align:"right"});
    doc.setFont("helvetica","normal");
    textCol(doc,C.muted);
    doc.text(hoy(), W-PX, 15, {align:"right"});

    /* ══ KPI CARDS ══ */
    let curY = HH+4;
    const KH=22, KW=(W-2*PX-8)/3, gap=4;

    // Card 1: Promedio Competencias
    function kpiCard(x, label, valor, max, color, sufijo="/4") {
      roundRect(doc, x,curY,KW,KH,2, C.surface, C.border, 0.3);
      doc.setFont("helvetica","bold"); doc.setFontSize(5.5);
      textCol(doc,C.muted);
      doc.text(label, x+3, curY+5);
      // Número grande
      doc.setFont("helvetica","bold"); doc.setFontSize(14);
      textCol(doc,C.white);
      doc.text(`${valor}`, x+3, curY+14);
      const valW = doc.getTextWidth(`${valor}`); // medir ANTES de cambiar el tamaño de fuente
      doc.setFont("helvetica","normal"); doc.setFontSize(7); textCol(doc,C.muted);
      doc.text(sufijo, x+3+valW+1.5, curY+14);
      // Barra
      bar(doc, x+3, curY+16, KW-6, 2.5, (parseFloat(valor)/max), color);
    }

    kpiCard(PX,          "PROMEDIO COMPETENCIAS", pc.toFixed(2), 4,  C.accent, "/4");
    kpiCard(PX+KW+gap,   "PUNTAJE POTENCIAL",     pot,           100, nivelP,  "/100");
    kpiCard(PX+KW*2+gap*2,"PUNTAJE DESEMPENO",    des,           100, nivelD,  "/100");

    /* ── Texto perfil ── */
    curY += KH+3;
    doc.setFont("helvetica","italic"); doc.setFontSize(7);
    textCol(doc,C.muted);
    doc.text(interp, PX, curY, {maxWidth: W-2*PX});
    curY += 5;

    /* ══ RECOMENDACIÓN ══ */
    const RH=18;
    roundRect(doc, PX,curY,W-2*PX,RH,2, [26,22,50], [76,63,160], 0.6);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.accent);
    doc.text("* RECOMENDACION", PX+3, curY+6);
    doc.setFont("helvetica","bold");
    textCol(doc,C.text);
    const { lines: recLines, fontSize: recSize } = fitTextBlock(doc, rec, W-2*PX-6, 2, 8, 6.5);
    doc.setFontSize(recSize);
    recLines.forEach((ln,i)=> doc.text(ln, PX+3, curY+11+i*4.5));
    curY += RH+4;

    /* ══ FILA MEDIA: Overview + 9Box + Interpretación ══ */
    const BODY_H=62;
    const LW=65, MW=68, RW=W-2*PX-LW-MW-8;

    // Card izquierda
    roundRect(doc, PX,curY,LW,BODY_H,2, C.surface, C.border, 0.3);

    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.accent);
    doc.text("OVERVIEW EJECUTIVO", PX+3, curY+6);

    const { lines: ovLines, fontSize: ovSize } = fitTextBlock(doc, interp, LW-6, 3, 7, 5.5);
    doc.setFont("helvetica","normal"); doc.setFontSize(ovSize);
    textCol(doc,C.text);
    ovLines.forEach((ln,i)=> doc.text(ln, PX+3, curY+12+i*4));

    // Fortalezas
    let ly = curY+28;
    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.green);
    doc.text("FORTALEZAS", PX+3, ly);
    ly+=4;
    const colWL = LW/2 - 6;
    doc.setFont("helvetica","normal"); doc.setFontSize(5.6);
    textCol(doc,C.text);
    if (!forts.length) {
      textCol(doc,C.muted);
      doc.text("Ninguna aún", PX+4, ly);
    }
    forts.slice(0,3).forEach(f=>{
      const lines = wrapLimited(doc, `• ${f.nombre}`, colWL, 5.6, 2);
      doc.setFont("helvetica","normal"); doc.setFontSize(5.6); textCol(doc,C.text);
      lines.forEach(ln=>{ doc.text(ln, PX+4, ly); ly+=2.7; });
      ly += 0.5;
    });

    // Áreas desarrollo
    let ly2=curY+28;
    const col2x = PX+LW/2+2;
    const colWR = LW/2 - 6;
    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.yellow);
    doc.text("AREAS DESARROLLO", col2x, ly2, {maxWidth: colWR+4});
    ly2+=4;
    devs.slice(0,3).forEach(d=>{
      const lines = wrapLimited(doc, `• ${d.nombre}`, colWR, 5.6, 2);
      doc.setFont("helvetica","normal"); doc.setFontSize(5.6); textCol(doc,C.text);
      lines.forEach(ln=>{ doc.text(ln, col2x+1, ly2); ly2+=2.7; });
      ly2 += 0.5;
    });

    // Recomendacion corta
    let ly3=curY+BODY_H-12;
    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.yellow);
    doc.text("REC. EJECUTIVA", PX+3, ly3);
    doc.setFont("helvetica","normal");
    textCol(doc,C.text);
    const { lines: recCortas, fontSize: recCortaSize } = fitTextBlock(doc, rec, LW-6, 2, 6, 5);
    doc.setFontSize(recCortaSize);
    recCortas.forEach((ln,i)=> doc.text(i===0?`01 ${ln}`:ln, PX+3, ly3+4+i*3.2));

    // Card central: 9-Box
    const mx = PX+LW+4;
    roundRect(doc, mx,curY,MW,BODY_H,2, C.surface, C.border, 0.3);
    const boxSize=54, boxX=mx+(MW-boxSize)/2, boxY=curY+(BODY_H-boxSize)/2-2;
    draw9Box(doc, boxX, boxY, boxSize, emp);

    // Card derecha: Interpretación
    const rx = mx+MW+4;
    roundRect(doc, rx,curY,RW,BODY_H,2, C.surface, C.border, 0.3);

    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.accent);
    doc.text("INTERPRETACION EJECUTIVA", rx+3, curY+6);

    const { lines: intLines, fontSize: intSize } = fitTextBlock(doc, interp, RW-6, 4, 7, 5.5);
    doc.setFont("helvetica","normal"); doc.setFontSize(intSize);
    textCol(doc,C.text);
    let iy=curY+12;
    intLines.forEach(ln=>{ doc.text(ln, rx+3, iy); iy+=4; });

    iy+=2;
    doc.setFont("helvetica","normal"); doc.setFontSize(6);
    textCol(doc,C.muted);
    doc.text(pos, rx+3, iy);

    // Mini barra potencial en card derecha
    iy+=6;
    doc.setFont("helvetica","bold"); doc.setFontSize(5.5);
    textCol(doc,C.muted);
    doc.text("RESULTADO FINAL POTENCIAL", rx+3, iy);
    iy+=3;
    bar(doc, rx+3, iy, RW-6, 3, pot/100, nivelP);
    doc.setFont("helvetica","bold"); doc.setFontSize(8);
    textCol(doc,C.white);
    doc.text(`${pot}`, rx+4, iy+6);
    const potW = doc.getTextWidth(`${pot}`);
    doc.setFont("helvetica","normal"); doc.setFontSize(6); textCol(doc,C.muted);
    doc.text("/100", rx+4+potW+1, iy+6);

    curY += BODY_H+4;

    /* ══ COMPETENCIAS ══ */
    const nCols=2, compW=(W-2*PX-4)/nCols;
    const nRows=Math.ceil(comps.length/nCols);
    const LEGEND_H=6;
    const COMP_H=10+LEGEND_H+nRows*14;
    roundRect(doc, PX,curY,W-2*PX,COMP_H,2, C.surface, C.border, 0.3);

    doc.setFont("helvetica","bold"); doc.setFontSize(6);
    textCol(doc,C.muted);
    doc.text("COMPETENCIAS EVALUADAS", PX+3, curY+5);
    doc.text(`${comps.length} items`, W-PX-3, curY+5, {align:"right"});

    // Leyenda de colores (que significa cada color)
    function legendChip(lx, ly, color, label) {
      circle(doc, lx, ly, 1.3, color, null);
      doc.setFont("helvetica","normal"); doc.setFontSize(5.5);
      textCol(doc, C.muted);
      doc.text(label, lx+2.5, ly+1);
      return lx + 2.5 + doc.getTextWidth(label) + 6;
    }
    let legX = PX+3;
    const legY = curY+9.5;
    legX = legendChip(legX, legY, C.green, "Fortaleza (\u226575%)");
    legX = legendChip(legX, legY, C.yellow, "En desarrollo (50-74%)");
    legX = legendChip(legX, legY, C.red, "Prioritario (<50%)");

    comps.forEach((comp,i)=>{
      const col=i%2, row=Math.floor(i/2);
      const cx2=PX+3+col*(compW+4);
      const cy2=curY+10+LEGEND_H+row*14;
      const cColor = colorNivel(comp.nivel);
      const pct = comp.puntaje/4;

      // Nombre
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      textCol(doc,C.text);
      doc.text(comp.nombre, cx2, cy2);

      // Badge nivel
      const bText=comp.nivel;
      doc.setFontSize(5.5); doc.setFont("helvetica","normal");
      const bW=doc.getTextWidth(bText)+3;
      roundRect(doc, cx2+compW-bW-2, cy2-4, bW, 5, 1,
        [cColor[0],cColor[1],cColor[2]], cColor, 0.3);
      doc.setFillColor(...[cColor[0],cColor[1],cColor[2]]);
      doc.setGState(new doc.GState({opacity:0.2}));
      doc.roundedRect(cx2+compW-bW-2, cy2-4, bW, 5, 1, 1, "F");
      doc.setGState(new doc.GState({opacity:1}));
      textCol(doc,cColor);
      doc.text(bText, cx2+compW-bW, cy2);

      // Barra
      bar(doc, cx2, cy2+2, compW-25, 2.5, pct, cColor);

      // Valor
      doc.setFont("helvetica","bold"); doc.setFontSize(8);
      textCol(doc,C.white);
      doc.text(`${comp.puntaje.toFixed(2)}`, cx2+compW-20, cy2+5, {align:"right"});
    });

    curY += COMP_H+4;

    /* ══ FOOTER ══ */
    const FY=H-8;
    rect(doc, 0,FY,W,8, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,FY,W,FY);

    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    doc.text("TALENT · OnePager 2026", PX, FY+5);
    doc.setFont("helvetica","normal");
    doc.text(`Generado el ${hoy()} · Uso interno y confidencial`, W-PX, FY+5, {align:"right"});
    doc.text(empresa, W/2, FY+5, {align:"center"});
  }

  /* ══════════════════════════════════════════════════════
     PÁGINA 2 — PLAN DE DESARROLLO INDIVIDUAL
     ══════════════════════════════════════════════════════ */
  function tipDe(comp) {
    if (comp.tip) return comp.tip;
    if (typeof tipCompetencia === "function") return tipCompetencia(comp.nombre, comp.puntaje);
    return "Seguir reforzando esta competencia con retroalimentacion periodica.";
  }
  function nivelDe(comp) {
    if (comp.nivel) return comp.nivel;
    if (typeof nivelCompetencia === "function") return nivelCompetencia(comp.puntaje);
    return comp.puntaje >= 3 ? "Fortaleza" : "En desarrollo";
  }
  function colorNivel(nivel) {
    if (nivel === "Fortaleza") return C.green;
    if (nivel === "Prioritario") return C.red;
    return C.yellow;
  }

  function dibujarPaginaPlan(doc, emp, empresa, medicion) {
    const W=210, H=297;
    const PX=12, PY=8;
    const comps = (emp.COMPETENCIAS || []).map(c => ({
      nombre: c.nombre, puntaje: c.puntaje,
      nivel: nivelDe(c), tip: tipDe(c)
    }));
    const ordenadas = [...comps].sort((a,b)=>a.puntaje-b.puntaje);
    const prioritarias = ordenadas.slice(0,2);
    const fuertes = [...comps].sort((a,b)=>b.puntaje-a.puntaje).slice(0,2);

    /* Fondo */
    rect(doc, 0,0,W,H, C.bg, null);

    /* Header */
    const HH=26;
    rect(doc, 0,0,W,HH, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,HH,W,HH);
    doc.setFont("helvetica","bold"); doc.setFontSize(11);
    textCol(doc,C.white);
    doc.text("PLAN DE DESARROLLO INDIVIDUAL", PX, HH/2-1);
    doc.setFont("helvetica","normal"); doc.setFontSize(7);
    textCol(doc,C.muted);
    doc.text(`${(emp.NOMBRE||"").toUpperCase()} · ${emp.CARGO||"—"} · CC ${emp.CC||"—"}`, PX, HH/2+6);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.accent);
    doc.text("ESCALA 1 - 4", W-PX, 10, {align:"right"});
    doc.setFont("helvetica","normal"); textCol(doc,C.muted);
    doc.text(hoy(), W-PX, 15, {align:"right"});

    let curY = HH+6;

    /* ══ TABLA DE COMPETENCIAS ══ */
    const rowH = 21;
    const tblH = 8 + comps.length*rowH;
    roundRect(doc, PX,curY,W-2*PX,tblH,2, C.surface, C.border, 0.3);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    doc.text("DETALLE POR COMPETENCIA Y RECOMENDACIÓN", PX+3, curY+5.5);

    let ry = curY+9;
    comps.forEach(c => {
      const color = colorNivel(c.nivel);
      const pct = c.puntaje/4;
      // Nombre + puntaje + nivel
      doc.setFont("helvetica","bold"); doc.setFontSize(7.5);
      textCol(doc,C.white);
      doc.text(c.nombre, PX+3, ry);
      doc.setFont("helvetica","bold"); doc.setFontSize(7.5);
      textCol(doc,color);
      doc.text(`${c.puntaje.toFixed(2)} / 4.00 · ${c.nivel}`, W-PX-3, ry, {align:"right"});
      // Barra
      bar(doc, PX+3, ry+2, W-2*PX-6, 2.2, pct, color);
      // Tip
      doc.setFont("helvetica","normal"); doc.setFontSize(6.3);
      textCol(doc,C.text);
      const tipLines = wrapText(doc, c.tip, W-2*PX-6, 6.3);
      tipLines.slice(0,2).forEach((ln,i)=> doc.text(ln, PX+3, ry+7+i*3.4));
      ry += rowH;
    });

    curY += tblH+5;

    /* ══ PRIORIDADES DE DESARROLLO ══ */
    const halfW = (W-2*PX-4)/2;
    const boxH = 58;

    roundRect(doc, PX,curY,halfW,boxH,2, [35,18,18], [120,40,40], 0.5);
    doc.setFont("helvetica","bold"); doc.setFontSize(7);
    textCol(doc,C.red);
    doc.text("• PRIORIDADES DE DESARROLLO", PX+3, curY+6);
    let py = curY+11;
    if (prioritarias.length === 0) {
      doc.setFont("helvetica","normal"); doc.setFontSize(6.5); textCol(doc,C.muted);
      doc.text("No se identifican competencias criticas en este momento.", PX+3, py, {maxWidth:halfW-6});
    }
    prioritarias.forEach((c,i)=>{
      doc.setFont("helvetica","bold"); doc.setFontSize(6.8); textCol(doc,C.white);
      doc.text(`${i+1}. ${c.nombre} (${c.puntaje.toFixed(2)}/4.00)`, PX+3, py, {maxWidth:halfW-6});
      py += 4.2;
      doc.setFont("helvetica","normal"); doc.setFontSize(6.2); textCol(doc,C.text);
      const lines = wrapText(doc, c.tip, halfW-6, 6.2);
      lines.slice(0,4).forEach(ln=>{ doc.text(ln, PX+4, py); py+=3.3; });
      py += 2.5;
    });

    /* ══ FORTALEZAS A POTENCIAR ══ */
    const rx = PX+halfW+4;
    roundRect(doc, rx,curY,halfW,boxH,2, [18,30,24], [40,110,80], 0.5);
    doc.setFont("helvetica","bold"); doc.setFontSize(7);
    textCol(doc,C.green);
    doc.text("• FORTALEZAS A POTENCIAR", rx+3, curY+6);
    let fy = curY+11;
    fuertes.forEach((c,i)=>{
      doc.setFont("helvetica","bold"); doc.setFontSize(6.8); textCol(doc,C.white);
      doc.text(`${i+1}. ${c.nombre} (${c.puntaje.toFixed(2)}/4.00)`, rx+3, fy, {maxWidth:halfW-6});
      fy += 4.2;
      doc.setFont("helvetica","normal"); doc.setFontSize(6.2); textCol(doc,C.text);
      const lines = wrapText(doc, c.tip, halfW-6, 6.2);
      lines.slice(0,4).forEach(ln=>{ doc.text(ln, rx+4, fy); fy+=3.3; });
      fy += 2.5;
    });

    curY += boxH+5;

    /* ══ SEGUIMIENTO SUGERIDO ══ */
    const segH = 24;
    roundRect(doc, PX,curY,W-2*PX,segH,2, [26,22,50], [76,63,160], 0.6);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.accent);
    doc.text("* SEGUIMIENTO SUGERIDO", PX+3, curY+6);
    doc.setFont("helvetica","normal"); doc.setFontSize(6.5);
    textCol(doc,C.text);
    const seguimiento = [
      "30 dias: revisar avances en las 2 competencias prioritarias con el lider directo.",
      "60 dias: retroalimentacion cruzada de pares sobre cambios observados.",
      "90 dias: nueva medicion o autoevaluacion para verificar progreso del plan."
    ];
    seguimiento.forEach((s,i)=> doc.text(`• ${s}`, PX+3, curY+11+i*4.2, {maxWidth:W-2*PX-6}));

    /* Footer */
    const FY=H-8;
    rect(doc, 0,FY,W,8, C.surface, null);
    doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
    doc.line(0,FY,W,FY);
    doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
    textCol(doc,C.muted);
    doc.text("TALENT · Plan de Desarrollo", PX, FY+5);
    doc.setFont("helvetica","normal");
    doc.text(`Generado el ${hoy()} · Uso interno y confidencial`, W-PX, FY+5, {align:"right"});
    doc.text(empresa, W/2, FY+5, {align:"center"});
  }

  /* ══════════════════════════════════════════════════════
     PÁGINA(S) — RETROALIMENTACIÓN 360
     Se agrega solo si el empleado tiene feedback registrado.
     Soporta 1 o varios evaluadores y salto automático de página
     si el contenido no cabe en una sola hoja.
     ══════════════════════════════════════════════════════ */
  function dibujarPaginaFeedback(doc, emp, empresa, medicion) {
    const W=210, H=297;
    const PX=12;
    const feedbacks = emp.FEEDBACK || [];
    if (!feedbacks.length) return;

    const HH = 26;
    const MAXY = H - 16; // deja espacio para el footer

    function pintarHeader(continuacion) {
      rect(doc, 0,0,W,H, C.bg, null);
      rect(doc, 0,0,W,HH, C.surface, null);
      doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
      doc.line(0,HH,W,HH);
      doc.setFont("helvetica","bold"); doc.setFontSize(11);
      textCol(doc,C.white);
      doc.text(continuacion ? "RETROALIMENTACIÓN 360 (cont.)" : "RETROALIMENTACIÓN 360", PX, HH/2-1);
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      textCol(doc,C.muted);
      doc.text(`${(emp.NOMBRE||"").toUpperCase()} · ${emp.CARGO||"—"} · CC ${emp.CC||"—"}`, PX, HH/2+6);
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.accent);
      doc.text(`${feedbacks.length} EVALUADOR${feedbacks.length>1?"ES":""}`, W-PX, 10, {align:"right"});
      doc.setFont("helvetica","normal"); textCol(doc,C.muted);
      doc.text(hoy(), W-PX, 15, {align:"right"});
      return HH+8;
    }

    function pintarFooter() {
      const FY=H-8;
      rect(doc, 0,FY,W,8, C.surface, null);
      doc.setDrawColor(...C.border); doc.setLineWidth(0.4);
      doc.line(0,FY,W,FY);
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.muted);
      doc.text("TALENT · Retroalimentación 360", PX, FY+5);
      doc.setFont("helvetica","normal");
      doc.text(`Generado el ${hoy()} · Uso interno y confidencial`, W-PX, FY+5, {align:"right"});
      doc.text(empresa, W/2, FY+5, {align:"center"});
    }

    let curY = pintarHeader(false);
    const showEvaluador = true;

    /* Divide un texto en párrafos por salto de línea (los evaluadores suelen
       escribir listas con "- " o líneas separadas). Cada línea no vacía se
       envuelve por separado para conservar la estructura original. */
    function parrafos(texto, maxW, size) {
      const partes = (texto || "No registrado.").split(/\n+/).map(s=>s.trim()).filter(Boolean);
      const out = [];
      (partes.length ? partes : ["No registrado."]).forEach(p => {
        wrapText(doc, p, maxW, size).forEach(l => out.push(l));
      });
      return out;
    }

    feedbacks.forEach((fb, idx) => {
      const maxW = W-2*PX-6;
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      const aspLines = parrafos(fb.aspectos, maxW, 7);
      const recLines = parrafos(fb.recomendaciones, maxW, 7);
      const headerH  = showEvaluador ? 6 : 0;
      const blockH   = 10 + headerH + 5 + aspLines.length*3.6 + 6 + recLines.length*3.6 + 4;

      if (curY + blockH > MAXY) {
        pintarFooter();
        curY = pintarHeader(true);
      }

      roundRect(doc, PX,curY,W-2*PX,blockH,2, C.surface, C.border, 0.3);
      let iy = curY+6;
      if (showEvaluador) {
        doc.setFont("helvetica","bold"); doc.setFontSize(7);
        textCol(doc,C.accent);
        const etiqueta = feedbacks.length > 1 ? `EVALUADOR ${idx+1} · ${fb.evaluador || "No especificado"}` : `EVALUADOR · ${fb.evaluador || "No especificado"}`;
        doc.text(etiqueta, PX+3, iy);
        iy += 6;
      }
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.green);
      doc.text("• ASPECTOS A RESALTAR", PX+3, iy);
      iy += 4.4;
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      textCol(doc,C.text);
      aspLines.forEach(ln => { doc.text(ln, PX+3, iy); iy += 3.6; });
      iy += 3;
      doc.setFont("helvetica","bold"); doc.setFontSize(6.5);
      textCol(doc,C.yellow);
      doc.text("• RECOMENDACIONES / OPORTUNIDADES DE MEJORA", PX+3, iy);
      iy += 4.4;
      doc.setFont("helvetica","normal"); doc.setFontSize(7);
      textCol(doc,C.text);
      recLines.forEach(ln => { doc.text(ln, PX+3, iy); iy += 3.6; });

      curY += blockH + 5;
    });

    pintarFooter();
  }

  function feedbackDe(emp) {
    if (emp.FEEDBACK && emp.FEEDBACK.length) return emp.FEEDBACK;
    if (typeof getFeedbackReal === "function") return getFeedbackReal(emp.CC);
    return null;
  }

  /* ══════════════════════════════════════════════════════
     API PÚBLICA
     ══════════════════════════════════════════════════════ */

  /**
   * Genera y descarga el PDF de un solo empleado.
   * @param {Object} emp       — objeto empleado (NOMBRE, CC, COMPETENCIAS, etc.)
   * @param {string} empresa   — nombre de la empresa para el footer
   * @param {string} medicion  — etiqueta de la medición
   */
  function individual(emp, empresa="Empresa Demo S.A.S", medicion="2026") {
    if (typeof jspdf === "undefined" && typeof window.jspdf === "undefined") {
      alert("Error: jsPDF no está cargado. Verifica que el CDN esté disponible.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });
    dibujarPagina(doc, emp, empresa, medicion);
    doc.addPage();
    dibujarPaginaPlan(doc, emp, empresa, medicion);
    const fb = feedbackDe(emp);
    if (fb && fb.length) {
      doc.addPage();
      dibujarPaginaFeedback(doc, { ...emp, FEEDBACK: fb }, empresa, medicion);
    }
    const fileName = `Reporte_${(emp.NOMBRE||"empleado").replace(/\s+/g,"_")}.pdf`;
    doc.save(fileName);
  }

  /**
   * Genera y descarga un PDF masivo (una página por empleado).
   * @param {Array}  lista      — array de empleados
   * @param {string} empresa
   * @param {string} medicion
   * @param {Function} onProgress — callback(actual, total) opcional
   */
  function masivo(lista, empresa="Empresa Demo S.A.S", medicion="2026", onProgress=null) {
    if (!lista || lista.length === 0) {
      alert("No hay empleados para generar el reporte.");
      return;
    }
    if (typeof jspdf === "undefined" && typeof window.jspdf === "undefined") {
      alert("Error: jsPDF no está cargado.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });

    lista.forEach((emp, i) => {
      if (i > 0) doc.addPage();
      dibujarPagina(doc, emp, empresa, medicion);
      doc.addPage();
      dibujarPaginaPlan(doc, emp, empresa, medicion);
      const fb = feedbackDe(emp);
      if (fb && fb.length) {
        doc.addPage();
        dibujarPaginaFeedback(doc, { ...emp, FEEDBACK: fb }, empresa, medicion);
      }
      if (onProgress) onProgress(i+1, lista.length);
    });

    const fecha = new Date().toLocaleDateString("es-CO",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");
    doc.save(`Reporte_Masivo_Talento_${fecha}.pdf`);
  }

  /**
   * Genera el PDF de un empleado y lo retorna como ArrayBuffer.
   * Usado internamente por descargarZIP en dashboard.html.
   * @param {Object} emp
   * @param {string} empresa
   * @param {string} medicion
   * @returns {ArrayBuffer}
   */
  function pdfBytes(emp, empresa="Empresa Demo S.A.S", medicion="2026") {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:"mm", format:"a4", orientation:"portrait" });
    dibujarPagina(doc, emp, empresa, medicion);
    doc.addPage();
    dibujarPaginaPlan(doc, emp, empresa, medicion);
    const fb = feedbackDe(emp);
    if (fb && fb.length) {
      doc.addPage();
      dibujarPaginaFeedback(doc, { ...emp, FEEDBACK: fb }, empresa, medicion);
    }
    return doc.output("arraybuffer");
  }

  return { individual, masivo, pdfBytes };

})();
