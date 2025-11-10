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

def footer(canvas, doc):
    canvas.saveState()
    footer_text = f"Plagiarism Report  |  Page {doc.page}"
    canvas.setFont("Helvetica", 9)
    canvas.drawString(40, 25, footer_text)
    canvas.restoreState()


def get_similarity_color(percent):
    if percent < 20:
        return colors.green
    elif percent < 50:
        return colors.orange
    else:
        return colors.red


def generate_plagiarism_report(project, output_path):

    doc = SimpleDocTemplate(
        output_path,
        pagesize=LETTER,
        leftMargin=40,
        rightMargin=40,
        topMargin=60,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()

    heading = ParagraphStyle(
        "Heading",
        parent=styles["Heading1"],
        fontSize=20,
        textColor=colors.HexColor("#003566"),
        spaceAfter=10
    )

    section = ParagraphStyle(
        "Section",
        parent=styles["Heading2"],
        fontSize=15,
        textColor=colors.HexColor("#00509E"),
        spaceAfter=8
    )

    bold_text = ParagraphStyle(
        "Bold",
        parent=styles["BodyText"],
        fontSize=11,
        textColor=colors.black,
        leading=16
    )

    normal = styles["BodyText"]

    story = []

    # -----------------------
    # TITLE SECTION
    # -----------------------
    story.append(Paragraph("PLAGIARISM ANALYSIS REPORT", heading))
    story.append(Spacer(1, 15))

    approved_text = "✅ Approved" if project.get("approved") else "❌ Pending"

    title_html = f"""
        <b>Project ID:</b> {project['_id']}<br/>
        <b>Title:</b> {project['title']}<br/>
        <b>Category:</b> {project['category']}<br/>
        <b>Uploaded By (Student ID):</b> {project['uploadedBy']}<br/>
        <b>Approved:</b> {approved_text}<br/>
        <b>Upload Date:</b> {project['uploadDate']}<br/>
    """
    story.append(Paragraph(title_html, bold_text))
    story.append(Spacer(1, 15))

    # --------------------------------
    # Project Description
    # --------------------------------
    story.append(Paragraph("PROJECT DESCRIPTION", section))
    story.append(Paragraph(project["description"], normal))
    story.append(Spacer(1, 20))

    story.append(PageBreak())

    # -----------------------
    # MENTOR DETAILS
    # -----------------------
    story.append(Paragraph("MENTOR DETAILS", section))
    mentor = project.get("mentor", {})

    mentor_html = f"""
        <b>Name:</b> {mentor.get('mentorName', 'N/A')}<br/>
        <b>Email:</b> {mentor.get('mentorEmail', 'N/A')}<br/>
    """
    story.append(Paragraph(mentor_html, normal))
    story.append(Spacer(1, 20))

    # -----------------------
    # TEAM MEMBERS
    # -----------------------
    story.append(Paragraph("TEAM MEMBERS", section))

    teammates = project.get("teammates", [])
    if teammates:
        for t in teammates:
            story.append(
                Paragraph(
                    f"• <b>{t.get('name', 'Unknown')}</b> — {t.get('email','')}",
                    normal
                )
            )
    else:
        story.append(Paragraph("No teammates", normal))

    story.append(Spacer(1, 20))

    # -----------------------
    # PLAGIARISM SUMMARY
    # -----------------------
    story.append(Paragraph("PLAGIARISM SUMMARY", section))

    percent = int(project.get("similarityPercentage", 0))
    similarity_color = get_similarity_color(percent)

    summary_html = f"""
        <b>Overall Similarity:</b>
        <font color="{similarity_color}">{percent}%</font><br/>
        <b>File Path:</b> {project['filePath']}<br/>
    """
    story.append(Paragraph(summary_html, bold_text))
    story.append(Spacer(1, 20))

    # -----------------------
    # MATCH BREAKDOWN
    # -----------------------
    story.append(Paragraph("DETAILED MATCH BREAKDOWN", section))

    matches = project.get("matches", [])

    if not matches:
        story.append(Paragraph("✅ No plagiarism detected.", bold_text))
    else:
        table_data = [["Source Project", "Match %", "Snippet"]]

        for m in matches:
            table_data.append([
                m.get("projectId", "Unknown"),
                f"{m.get('similarity', m.get('percent', 0))}%",
                m.get("snippet", "No snippet available"),
            ])

        table = Table(table_data, colWidths=[150, 70, 260])
        table.setStyle(TableStyle([
            ("BACKGROUND", (0,0), (-1,0), colors.HexColor("#001D4A")),
            ("TEXTCOLOR", (0,0), (-1,0), colors.white),
            ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
            ("ALIGN", (1,1), (1,-1), "CENTER"),

            ("BACKGROUND", (0,1), (-1,-1), colors.whitesmoke),
            ("GRID", (0,0), (-1,-1), 0.8, colors.grey),
            ("VALIGN", (0,0), (-1,-1), "TOP"),
        ]))

        story.append(table)

    story.append(Spacer(1, 25))

    story.append(
        Paragraph(
            "<i>This report was auto-generated by the Student Project Platform.</i>",
            styles["Italic"]
        )
    )

    doc.build(story, onFirstPage=footer, onLaterPages=footer)

    return output_path
