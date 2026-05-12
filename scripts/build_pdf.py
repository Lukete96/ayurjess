from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "dist" / "ayurveda-jessica-dossie-compartilhavel.md"
TARGET = ROOT / "dist" / "ayurveda-jessica-dossie-compartilhavel.pdf"


def clean_inline_markdown(text: str) -> str:
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1 (\2)", text)
    text = re.sub(r"`([^`]+)`", r"<font name='Courier'>\1</font>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"\*([^*]+)\*", r"<i>\1</i>", text)
    return text


def build_styles():
    styles = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "DocTitle",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=28,
            textColor=colors.HexColor("#2E4A3E"),
            alignment=TA_CENTER,
            spaceAfter=18,
        ),
        "h1": ParagraphStyle(
            "H1",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=17,
            leading=22,
            textColor=colors.HexColor("#2E4A3E"),
            spaceBefore=14,
            spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=13,
            leading=18,
            textColor=colors.HexColor("#5B6F60"),
            spaceBefore=10,
            spaceAfter=6,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#202020"),
            spaceAfter=6,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            leftIndent=14,
            firstLineIndent=-10,
            bulletIndent=0,
            textColor=colors.HexColor("#202020"),
            spaceAfter=4,
        ),
    }


def markdown_to_story(markdown_text: str):
    styles = build_styles()
    story = []
    first_title = True

    for raw_line in markdown_text.splitlines():
        line = raw_line.rstrip()
        if not line.strip():
            story.append(Spacer(1, 0.16 * cm))
            continue

        if line.startswith("# "):
            style = styles["title"] if first_title else styles["h1"]
            first_title = False
            story.append(Paragraph(clean_inline_markdown(line[2:].strip()), style))
            continue

        if line.startswith("## "):
            story.append(Paragraph(clean_inline_markdown(line[3:].strip()), styles["h1"]))
            continue

        if line.startswith("### "):
            story.append(Paragraph(clean_inline_markdown(line[4:].strip()), styles["h2"]))
            continue

        if re.match(r"^\d+\.\s+", line):
            content = re.sub(r"^\d+\.\s+", "", line)
            story.append(
                Paragraph(clean_inline_markdown(content), styles["bullet"], bulletText="•")
            )
            continue

        if line.startswith("- "):
            story.append(
                Paragraph(clean_inline_markdown(line[2:].strip()), styles["bullet"], bulletText="•")
            )
            continue

        story.append(Paragraph(clean_inline_markdown(line), styles["body"]))

    return story


def main():
    markdown_text = SOURCE.read_text(encoding="utf-8")
    story = markdown_to_story(markdown_text)

    doc = SimpleDocTemplate(
        str(TARGET),
        pagesize=A4,
        topMargin=1.8 * cm,
        bottomMargin=1.6 * cm,
        leftMargin=2.0 * cm,
        rightMargin=2.0 * cm,
        title="Dossie Compartilhavel - AyurVeda Jessica",
        author="Codex",
    )
    doc.build(story)
    print(TARGET)


if __name__ == "__main__":
    main()
