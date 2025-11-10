# from reportlab.lib.pagesizes import LETTER
# from reportlab.platypus import (
#     SimpleDocTemplate, Paragraph, Spacer, Table,
#     TableStyle, PageBreak
# )
# from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
# from reportlab.lib import colors
# from reportlab.pdfgen.canvas import Canvas


# # ----------------------------
# # Footer + Watermark
# # ----------------------------
# def footer(canvas, doc):
#     canvas.saveState()

#     # Footer text
#     footer_text = f"Plagiarism Report  |  Page {doc.page}"
#     canvas.setFont("Helvetica", 9)
#     canvas.drawString(40, 25, footer_text)

#     # Watermark
#     canvas.setFont("Helvetica-Bold", 40)
#     canvas.setFillGray(0.90, 0.20)
#     canvas.drawCentredString(300, 350, "CONFIDENTIAL")

#     canvas.restoreState()


# # ----------------------------
# # Color for % value
# # ----------------------------
# def get_similarity_color(percent):
#     if percent < 20:
#         return colors.green
#     elif percent < 50:
#         return colors.orange
#     else:
#         return colors.red


# # ----------------------------------------------------------
# # ✅ NEW FULLY DESIGNED PDF GENERATOR
# # ----------------------------------------------------------
# def generate_plagiarism_report(project, output_path):

#     doc = SimpleDocTemplate(
#         output_path,
#         pagesize=LETTER,
#         leftMargin=40,
#         rightMargin=40,
#         topMargin=60,
#         bottomMargin=40
#     )

#     styles = getSampleStyleSheet()

#     # Styled text components
#     title_style = ParagraphStyle(
#         "Title",
#         parent=styles["Heading1"],
#         fontSize=22,
#         spaceAfter=12,
#         textColor=colors.HexColor("#002855"),
#         alignment=1  # center
#     )

#     section_title = ParagraphStyle(
#         "SectionTitle",
#         parent=styles["Heading2"],
#         fontSize=15,
#         textColor=colors.HexColor("#003f88"),
#         spaceAfter=8
#     )

#     label_style = ParagraphStyle(
#         "Label",
#         parent=styles["BodyText"],
#         fontSize=11,
#         leading=16,
#         textColor=colors.black
#     )

#     story = []

#     # ------------------------------------------------------
#     # ✅ HEADER BAR
#     # ------------------------------------------------------
#     header_table = Table(
#         [["PLAGIARISM ANALYSIS REPORT"]],
#         colWidths=[530]
#     )
#     header_table.setStyle(TableStyle([
#         ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#001D4A")),
#         ("TEXTCOLOR", (0, 0), (-1, -1), colors.white),
#         ("ALIGN", (0, 0), (-1, -1), "CENTER"),
#         ("FONTSIZE", (0, 0), (-1, -1), 17),
#         ("FONTNAME", (0, 0), (-1, -1), "Helvetica-Bold"),
#         ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
#         ("TOPPADDING", (0, 0), (-1, -1), 10),
#     ]))
#     story.append(header_table)
#     story.append(Spacer(1, 20))

#     # ------------------------------------------------------
#     # ✅ PROJECT DETAILS TABLE
#     # ------------------------------------------------------
#     project_info = [
#         ["Project ID:", project["_id"]],
#         ["Title:", project["title"]],
#         ["Category:", project["category"]],
#         ["Uploaded By:", project["uploadedBy"]],
#         ["Upload Date:", project["uploadDate"]],
#     ]

#     info_table = Table(project_info, colWidths=[120, 400])
#     info_table.setStyle(TableStyle([
#         ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#003566")),
#         ("TEXTCOLOR", (0, 0), (0, -1), colors.white),
#         ("ALIGN", (0, 0), (0, -1), "LEFT"),
#         ("VALIGN", (0, 0), (-1, -1), "TOP"),
#         ("FONTSIZE", (0, 0), (-1, -1), 11),
#         ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
#         ("BACKGROUND", (1, 0), (1, -1), colors.whitesmoke),
#         ("BOX", (0, 0), (-1, -1), 0.8, colors.grey),
#         ("INNERGRID", (0, 0), (-1, -1), 0.4, colors.grey),
#     ]))

#     story.append(info_table)
#     story.append(Spacer(1, 20))

#     # ✅ PROJECT DESCRIPTION
#     story.append(Paragraph("PROJECT DESCRIPTION", section_title))
#     story.append(Paragraph(project["description"], label_style))
#     story.append(Spacer(1, 20))

#     story.append(PageBreak())

#     # ------------------------------------------------------
#     # ✅ MENTOR DETAILS
#     # ------------------------------------------------------
#     mentor = project.get("mentor", {})

#     mentor_info = [
#         ["Mentor Name:", mentor.get("mentorName", mentor.get("name", "N/A"))],
#         ["Mentor Email:", mentor.get("mentorEmail", mentor.get("email", "N/A"))],
#     ]

#     mentor_table = Table(mentor_info, colWidths=[150, 370])
#     mentor_table.setStyle(TableStyle([
#         ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#00509E")),
#         ("TEXTCOLOR", (0, 0), (0, -1), colors.white),
#         ("BACKGROUND", (1, 0), (1, -1), colors.whitesmoke),
#         ("BOX", (0, 0), (-1, -1), 0.8, colors.grey),
#         ("INNERGRID", (0, 0), (-1, -1), 0.4, colors.grey),
#     ]))

#     story.append(Paragraph("MENTOR DETAILS", section_title))
#     story.append(mentor_table)
#     story.append(Spacer(1, 20))

#     # ------------------------------------------------------
#     # ✅ TEAM MEMBERS
#     # ------------------------------------------------------
#     story.append(Paragraph("TEAM MEMBERS", section_title))

#     teammates = project.get("teammates", [])
#     if teammates:
#         team_rows = [["Name", "Email"]]
#         for t in teammates:
#             team_rows.append([t.get("name", "Unknown"), t.get("email", "")])

#         team_table = Table(team_rows, colWidths=[200, 320])
#         team_table.setStyle(TableStyle([
#             ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#002855")),
#             ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
#             ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
#             ("BACKGROUND", (0, 1), (-1, -1), colors.whitesmoke),
#             ("GRID", (0, 0), (-1, -1), 0.6, colors.grey),
#         ]))

#         story.append(team_table)
#     else:
#         story.append(Paragraph("No teammates", label_style))

#     story.append(Spacer(1, 25))

#     # ------------------------------------------------------
#     # ✅ PLAGIARISM SUMMARY (colored badge)
#     # ------------------------------------------------------
#     percent = int(project["plagPercent"])
#     color = get_similarity_color(percent)

#     summary_html = f"""
#         <b>Overall Similarity Score:</b>
#         <font color="{color}"><b>{percent}%</b></font><br/><br/>
#         <b>File Path:</b> {project['filePath']}
#     """
#     story.append(Paragraph("PLAGIARISM SUMMARY", section_title))
#     story.append(Paragraph(summary_html, label_style))
#     story.append(Spacer(1, 25))

#     # ------------------------------------------------------
#     # ✅ DETAILED MATCHES TABLE
#     # ------------------------------------------------------
#     story.append(Paragraph("DETAILED MATCH BREAKDOWN", section_title))

#     matches = project.get("matches", [])

#     if not matches:
#         story.append(Paragraph("<b>✅ No plagiarism detected.</b>", label_style))
#     else:
#         rows = [["Source Project", "Match %", "Snippet"]]

#         for m in matches:
#             rows.append([
#                 m.get("projectId", "Unknown"),
#                 f"{m.get('percent', 0)}%",
#                 m.get("snippet", "No snippet available"),
#             ])

#         match_table = Table(rows, colWidths=[130, 60, 330])
#         match_table.setStyle(TableStyle([
#             ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#001D4A")),
#             ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
#             ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
#             ("GRID", (0, 0), (-1, -1), 0.6, colors.grey),
#             ("VALIGN", (0, 0), (-1, -1), "TOP")
#         ]))

#         story.append(match_table)

#     story.append(Spacer(1, 30))

#     story.append(Paragraph(
#         "<i>This report was automatically generated by the Student Project Platform.</i>",
#         styles["Italic"]
#     ))

#     # ------------------------------------------------------
#     # BUILD PDF
#     # ------------------------------------------------------
#     doc.build(story, onFirstPage=footer, onLaterPages=footer)
from reportlab.lib.pagesizes import LETTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer,
    Table, TableStyle, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from datetime import datetime

# ✅ Theme Colors (matching frontend blue-purple gradient)
PRIMARY_BLUE = colors.HexColor("#2563EB")  # Blue-600
PRIMARY_PURPLE = colors.HexColor("#9333EA")  # Purple-600
DARK_BLUE = colors.HexColor("#001D4A")
MEDIUM_BLUE = colors.HexColor("#003566")
LIGHT_BLUE = colors.HexColor("#00509E")
ACCENT_BLUE = colors.HexColor("#3B82F6")
LIGHT_GRAY = colors.HexColor("#F3F4F6")
BORDER_GRAY = colors.HexColor("#E5E7EB")


def footer(canvas, doc):
    """Enhanced footer with better styling"""
    canvas.saveState()
    
    # Footer line
    canvas.setStrokeColor(BORDER_GRAY)
    canvas.setLineWidth(0.5)
    canvas.line(40, 35, 576, 35)
    
    # Footer text with better styling
    footer_text = f"Plagiarism Analysis Report  |  Page {doc.page}  |  Generated on {datetime.now().strftime('%B %d, %Y')}"
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#6B7280"))
    canvas.drawString(40, 25, footer_text)
    
    # Watermark (subtle)
    canvas.setFont("Helvetica-Bold", 50)
    canvas.setFillColor(colors.HexColor("#F9FAFB"))
    canvas.drawCentredString(306, 400, "CONFIDENTIAL")
    
    canvas.restoreState()


def get_similarity_color(percent):
    """Get color based on similarity percentage"""
    if percent >= 70:
        return colors.HexColor("#EF4444")  # Red-500
    elif percent >= 40:
        return colors.HexColor("#F59E0B")  # Yellow-500/Orange
    else:
        return colors.HexColor("#10B981")  # Green-500


def get_similarity_status(percent):
    """Get status text based on percentage"""
    if percent >= 70:
        return "High Risk"
    elif percent >= 40:
        return "Medium Risk"
    else:
        return "Low Risk"


def generate_plagiarism_report(project, output_path):
    """Generate a beautifully designed plagiarism report PDF"""

    doc = SimpleDocTemplate(
        output_path,
        pagesize=LETTER,
        leftMargin=40,
        rightMargin=40,
        topMargin=70,
        bottomMargin=50
    )

    styles = getSampleStyleSheet()

    # ✅ Enhanced Style Definitions
    title_style = ParagraphStyle(
        "Title",
        parent=styles["Heading1"],
        fontSize=24,
        textColor=colors.white,
        spaceAfter=15,
        alignment=1,  # Center
        fontName="Helvetica-Bold"
    )

    section_style = ParagraphStyle(
        "Section",
        parent=styles["Heading2"],
        fontSize=16,
        textColor=DARK_BLUE,
        spaceAfter=10,
        spaceBefore=15,
        fontName="Helvetica-Bold",
        borderPadding=5,
        leftIndent=0
    )

    subsection_style = ParagraphStyle(
        "Subsection",
        parent=styles["Heading3"],
        fontSize=13,
        textColor=MEDIUM_BLUE,
        spaceAfter=8,
        spaceBefore=12,
        fontName="Helvetica-Bold"
    )

    label_style = ParagraphStyle(
        "Label",
        parent=styles["BodyText"],
        fontSize=10,
        textColor=colors.HexColor("#374151"),
        leading=14,
        fontName="Helvetica-Bold"
    )

    value_style = ParagraphStyle(
        "Value",
        parent=styles["BodyText"],
        fontSize=10,
        textColor=colors.black,
        leading=14
    )

    body_style = ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontSize=10,
        textColor=colors.black,
        leading=15,
        spaceAfter=8
    )

    story = []

    # ✅ ============================================
    # BEAUTIFUL HEADER WITH GRADIENT EFFECT
    # ✅ ============================================
    header_table = Table(
        [[Paragraph("🛡️ PLAGIARISM ANALYSIS REPORT", title_style)]],
        colWidths=[496]
    )
    header_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), DARK_BLUE),
        ("TEXTCOLOR", (0, 0), (-1, -1), colors.white),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 20),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 20),
        ("BOX", (0, 0), (-1, -1), 0, colors.white),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 20))

    # ✅ ============================================
    # PROJECT INFORMATION CARD
    # ✅ ============================================
    story.append(Paragraph("📋 PROJECT INFORMATION", subsection_style))
    
    approved_status = "✅ Approved" if project.get("approved") else "⏳ Pending Approval"
    approved_color = colors.HexColor("#10B981") if project.get("approved") else colors.HexColor("#F59E0B")
    
    project_info = [
        ["Project ID:", project.get("_id", "N/A")],
        ["Title:", project.get("title", "N/A")],
        ["Category:", project.get("category", "N/A")],
        ["Uploaded By:", str(project.get("uploadedBy", "N/A"))],
        ["Status:", approved_status],
        ["Upload Date:", str(project.get("uploadDate", "N/A"))],
    ]

    info_table = Table(project_info, colWidths=[140, 356])
    info_table.setStyle(TableStyle([
        # Label column styling
        ("BACKGROUND", (0, 0), (0, -1), MEDIUM_BLUE),
        ("TEXTCOLOR", (0, 0), (0, -1), colors.white),
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (0, -1), 10),
        ("ALIGN", (0, 0), (0, -1), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (0, -1), 12),
        ("RIGHTPADDING", (0, 0), (0, -1), 12),
        ("TOPPADDING", (0, 0), (0, -1), 10),
        ("BOTTOMPADDING", (0, 0), (0, -1), 10),
        
        # Value column styling
        ("BACKGROUND", (1, 0), (1, -1), LIGHT_GRAY),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (1, 0), (1, -1), 10),
        ("LEFTPADDING", (1, 0), (1, -1), 12),
        ("RIGHTPADDING", (1, 0), (1, -1), 12),
        ("TOPPADDING", (1, 0), (1, -1), 10),
        ("BOTTOMPADDING", (1, 0), (1, -1), 10),
        
        # Border styling
        ("BOX", (0, 0), (-1, -1), 1.5, DARK_BLUE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER_GRAY),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(info_table)
    story.append(Spacer(1, 20))

    # ✅ PROJECT DESCRIPTION
    story.append(Paragraph("📝 PROJECT DESCRIPTION", subsection_style))
    desc_box = Table(
        [[Paragraph(project.get("description", "No description provided."), body_style)]],
        colWidths=[496]
    )
    desc_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), 1, BORDER_GRAY),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
    ]))
    story.append(desc_box)
    story.append(Spacer(1, 25))

    story.append(PageBreak())

    # ✅ ============================================
    # MENTOR & TEAM INFORMATION
    # ✅ ============================================
    story.append(Paragraph("👥 MENTOR & TEAM DETAILS", section_style))

    # Mentor Details Card
    mentor = project.get("mentor", {})
    mentor_name = mentor.get("mentorName") or mentor.get("name", "Not Assigned")
    mentor_email = mentor.get("mentorEmail") or mentor.get("email", "N/A")
    
    mentor_info = [
        ["Mentor Name:", mentor_name],
        ["Mentor Email:", mentor_email],
    ]

    mentor_table = Table(mentor_info, colWidths=[140, 356])
    mentor_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), LIGHT_BLUE),
        ("TEXTCOLOR", (0, 0), (0, -1), colors.white),
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 10),
        ("BACKGROUND", (1, 0), (1, -1), LIGHT_GRAY),
        ("BOX", (0, 0), (-1, -1), 1, BORDER_GRAY),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER_GRAY),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.append(mentor_table)
    story.append(Spacer(1, 15))

    # Team Members
    story.append(Paragraph("👨‍👩‍👧‍👦 TEAM MEMBERS", subsection_style))
    teammates = project.get("teammates", [])
    
    if teammates:
        team_rows = [["Name", "Email"]]
        for t in teammates:
            team_rows.append([
                t.get("name", "Unknown"),
                t.get("email", "N/A")
            ])
        
        team_table = Table(team_rows, colWidths=[240, 256])
        team_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), MEDIUM_BLUE),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, 0), 11),
            ("BACKGROUND", (0, 1), (-1, -1), LIGHT_GRAY),
            ("FONTSIZE", (0, 1), (-1, -1), 10),
            ("GRID", (0, 0), (-1, -1), 1, BORDER_GRAY),
            ("LEFTPADDING", (0, 0), (-1, -1), 12),
            ("RIGHTPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING", (0, 0), (-1, -1), 10),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ]))
        story.append(team_table)
    else:
        no_team = Table(
            [[Paragraph("No team members assigned to this project.", body_style)]],
            colWidths=[496]
        )
        no_team.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), LIGHT_GRAY),
            ("BOX", (0, 0), (-1, -1), 1, BORDER_GRAY),
            ("LEFTPADDING", (0, 0), (-1, -1), 12),
            ("RIGHTPADDING", (0, 0), (-1, -1), 12),
            ("TOPPADDING", (0, 0), (-1, -1), 10),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ]))
        story.append(no_team)

    story.append(Spacer(1, 25))

    # ✅ ============================================
    # PLAGIARISM SUMMARY WITH VISUAL BADGE
    # ✅ ============================================
    story.append(Paragraph("🔍 PLAGIARISM ANALYSIS SUMMARY", section_style))
    
    percent = int(project.get("similarityPercentage", 0))
    similarity_color = get_similarity_color(percent)
    status_text = get_similarity_status(percent)
    
    # Create a visually appealing summary box
    summary_data = [
        [
            Paragraph(
                f"<b>Overall Similarity Score</b><br/><br/>"
                f"<font size='28' color='{similarity_color}'><b>{percent}%</b></font><br/><br/>"
                f"<font size='12'><b>Status:</b> {status_text}</font>",
                ParagraphStyle(
                    "Summary",
                    parent=styles["BodyText"],
                    fontSize=11,
                    textColor=colors.black,
                    alignment=1,  # Center
                    leading=16
                )
            )
        ]
    ]
    
    summary_table = Table(summary_data, colWidths=[496])
    summary_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), 2, similarity_color),
        ("LEFTPADDING", (0, 0), (-1, -1), 20),
        ("RIGHTPADDING", (0, 0), (-1, -1), 20),
        ("TOPPADDING", (0, 0), (-1, -1), 20),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 20),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 15))

    # File path info
    file_path = project.get("filePath", "N/A")
    file_info = Table(
        [[Paragraph(f"<b>Analyzed File:</b> {file_path}", body_style)]],
        colWidths=[496]
    )
    file_info.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_GRAY),
        ("BOX", (0, 0), (-1, -1), 1, BORDER_GRAY),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(file_info)
    story.append(Spacer(1, 25))

    # ✅ ============================================
    # DETAILED MATCH BREAKDOWN
    # ✅ ============================================
    story.append(Paragraph("📊 DETAILED MATCH BREAKDOWN", section_style))
    
    matches = project.get("matches", [])

    if not matches:
        no_match_box = Table(
            [[Paragraph(
                "<b>✅ No Plagiarism Detected</b><br/><br/>"
                "Great news! Your project shows no significant similarity with other submissions. "
                "The content appears to be original and unique.",
                body_style
            )]],
            colWidths=[496]
        )
        no_match_box.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#ECFDF5")),
            ("BOX", (0, 0), (-1, -1), 1.5, colors.HexColor("#10B981")),
            ("LEFTPADDING", (0, 0), (-1, -1), 15),
            ("RIGHTPADDING", (0, 0), (-1, -1), 15),
            ("TOPPADDING", (0, 0), (-1, -1), 15),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 15),
        ]))
        story.append(no_match_box)
    else:
        # Enhanced match table with better styling
        table_data = [["Source Project ID", "Similarity %", "Matched Content Snippet"]]

        for m in matches:
            match_percent = m.get("similarity", m.get("percent", 0))
            match_color = get_similarity_color(match_percent)
            snippet = m.get("snippet", "No snippet available")
            
            # Truncate long snippets
            if len(snippet) > 150:
                snippet = snippet[:147] + "..."
            
            table_data.append([
                m.get("projectId", "Unknown"),
                Paragraph(
                    f"<font color='{match_color}'><b>{match_percent}%</b></font>",
                    ParagraphStyle("MatchPercent", parent=body_style, alignment=1)
                ),
                Paragraph(snippet, body_style)
            ])

        match_table = Table(table_data, colWidths=[120, 80, 296])
        match_table.setStyle(TableStyle([
            # Header row
            ("BACKGROUND", (0, 0), (-1, 0), DARK_BLUE),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, 0), 11),
            ("ALIGN", (0, 0), (-1, 0), "CENTER"),
            ("VALIGN", (0, 0), (-1, 0), "MIDDLE"),
            
            # Data rows - alternating colors
            ("BACKGROUND", (0, 1), (-1, -1), colors.white),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, LIGHT_GRAY]),
            ("FONTSIZE", (0, 1), (-1, -1), 9),
            ("ALIGN", (1, 1), (1, -1), "CENTER"),
            ("VALIGN", (0, 1), (-1, -1), "TOP"),
            
            # Borders
            ("GRID", (0, 0), (-1, -1), 1, BORDER_GRAY),
            ("LINEBELOW", (0, 0), (-1, 0), 2, DARK_BLUE),
            
            # Padding
            ("LEFTPADDING", (0, 0), (-1, -1), 10),
            ("RIGHTPADDING", (0, 0), (-1, -1), 10),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ]))

        story.append(match_table)

    story.append(Spacer(1, 30))

    # ✅ ============================================
    # FOOTER NOTE
    # ✅ ============================================
    note_style = ParagraphStyle(
        "Note",
        parent=styles["Italic"],
        fontSize=9,
        textColor=colors.HexColor("#6B7280"),
        alignment=1,  # Center
        spaceBefore=10
    )
    story.append(Paragraph(
        "This report was automatically generated by the Student Project Platform.<br/>"
        f"Generated on {datetime.now().strftime('%B %d, %Y at %I:%M %p')}",
        note_style
    ))

    # ✅ Build PDF with enhanced footer
    doc.build(story, onFirstPage=footer, onLaterPages=footer)

    return output_path
