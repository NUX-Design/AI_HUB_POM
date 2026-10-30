# Repository Guidelines

## โครงสร้างและการจัดหมวดหมู่

Repository นี้มีเอกสารผลิตภัณฑ์ AI Hub และ frontend prototype ที่แปลงจาก Stitch ด้วย React, Vite และ Tailwind CSS; ยังไม่มีชุดทดสอบอัตโนมัติ

- `Raw_Requirements.md` คือข้อกำหนดตั้งต้นจากการประชุม
- `Prompt_Transcript.md` และ `output/transcribe/req_aihub_20261019/` คือ transcript และผลลัพธ์ถอดเสียงที่ใช้เป็นหลักฐาน
- `PRD.md` คือข้อกำหนดผลิตภัณฑ์ฉบับหลัก ให้ใช้เป็นแหล่งอ้างอิงเมื่อตรวจหรือปรับเนื้อหา
- `Convert_Requirement.md` และ `Convert_to_PRD.md` อธิบายกระบวนการแปลงเอกสาร
- `DESIGN.md` เป็นแนวทางภาพอ้างอิง ไม่ใช่แหล่งยืนยัน requirement
- `src/` เก็บ React entry point, components และ sections ของหน้า AI Hub; `index.html`, `vite.config.js`, `tailwind.config.cjs` และ `package.json` เป็นไฟล์ตั้งค่า frontend
- `output/stitch/` เก็บต้นฉบับ HTML และภาพที่ export จาก Stitch; ให้ใช้เป็น visual/source reference

## การพัฒนาและตรวจเอกสาร

ใช้คำสั่งต่อไปนี้สำหรับ frontend และตรวจเอกสาร:

```sh
npm install          # ติดตั้ง dependencies
npm run dev          # เปิด Vite dev server
npm run build        # สร้าง production bundle ใน dist/
npm run preview      # ดู production bundle ในเครื่อง
git diff --check
rg -n "\[DRAFT\]|\[AMBIGUOUS\]|\[ฟังไม่ชัด\]|ไม่ระบุ" --glob '*.md'
```

ไม่มี test suite ในขณะนี้; ก่อนส่ง frontend ให้ build และตรวจ A11Y.md/REPORT.md ตามหลักฐานจริง คำสั่ง rg ใช้ตรวจสถานะ requirement ไม่ได้ยืนยันความถูกต้องโดยอัตโนมัติ

## รูปแบบการเขียนและการตั้งชื่อ

เขียนเอกสารเป็นภาษาไทย ใช้หัวข้อ Markdown ที่สื่อความหมาย และคงชื่อเฉพาะหรือศัพท์เทคนิคตามต้นฉบับ ใช้รหัส requirement ที่มีอยู่ เช่น `FR--001`, `AC--001` และ `PRD--001` โดยไม่เปลี่ยนรหัสเพื่อความสวยงาม รักษาป้าย `[DRAFT]`, `[AMBIGUOUS]`, `[ฟังไม่ชัด]`, `[ไม่แน่ใจ]` และ `ไม่ระบุ` เมื่อข้อมูลยังไม่ยืนยัน ตั้งชื่อไฟล์เอกสารด้วย `Pascal_Snake_Case.md` ตามรูปแบบไฟล์ปัจจุบัน

## Accessibility

เมื่อพัฒนา หรือทบทวน Frontend ให้ปฏิบัติตาม [A11Y.md](https://github.com/fecarrico/A11Y.md/blob/main/docs/en/A11Y.md) และแนวทางอ้างอิงของ component ที่เกี่ยวข้อง ใช้ **Standard (AA) ตาม WCAG 2.2** เป็นค่าเริ่มต้น คำนึงถึง semantic HTML, การใช้งานด้วยแป้นพิมพ์และ focus, contrast, และการตรวจสอบก่อนส่งมอบ ห้ามกล่าวอ้างว่าเข้าถึงได้ตามมาตรฐานโดยไม่มีหลักฐานการตรวจสอบ

## แนวทางแก้ไขและทบทวน

ผูกการเปลี่ยนแปลงกับแหล่งที่มา ระบุความไม่แน่ชัดแทนการเติมข้อมูลเอง และอย่าแปลงตัวอย่างภาพใน `DESIGN.md` ให้เป็นข้อกำหนดผลิตภัณฑ์โดยไม่มีหลักฐานใน PRD หรือ requirement ต้นทาง หากแก้ requirement ให้ตรวจความสอดคล้องของรหัส ลิงก์อ้างอิง และ acceptance criteria ที่เกี่ยวข้อง

## Commit และ Pull Request

ยังไม่มี commit history ให้ใช้อ้างอิงรูปแบบข้อความ commit จึงยังไม่มี convention เฉพาะของ repository แนะนำข้อความสั้นแบบกริยานำ เช่น `docs: clarify model selection requirements` พร้อมอธิบายเหตุผลและเอกสารต้นทางใน PR ระบุไฟล์ที่เปลี่ยน ข้อกำหนดที่ได้รับผล และประเด็นที่ยังเปิดอยู่ เพิ่มภาพหน้าจอเฉพาะเมื่อมีการเปลี่ยนแปลงที่แสดงผลเป็นภาพ
