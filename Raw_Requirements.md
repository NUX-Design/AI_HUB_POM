# 0. บริบทการประชุม

- วันที่: ไม่ระบุ
- ผู้เข้าร่วม:
  - Speaker 1: ผู้ดำเนินการเก็บ Requirements
  - Speaker 2: ผู้ให้ข้อมูลด้าน Product และ Business
- วัตถุประสงค์หลัก: เก็บ Requirements สำหรับ AI Hub Landing Page เพื่อนำไปจัดทำ PRD, UX Flow, UI Design และ Development

# 1. ปัญหา

- ลูกค้าไม่เข้าใจว่า AI Hub ทำอะไร
- ลูกค้าต้องติดต่อ Team Sales ก่อนเริ่มใช้งาน ทำให้เสียเวลาและอาจสูญเสีย Conversion
- ผู้ใช้ต้องสมัครหลาย Platform และมี API หลายชุด
- การเปรียบเทียบโมเดลทำได้ยาก
- Documentation กระจัดกระจาย
- หากไม่มี Landing Page ผู้ใช้จะไม่เข้าใจ Value ของ Product และไม่เริ่มทดลองใช้งาน
- ผู้ที่พบปัญหา: ลูกค้า, Developer, AI Engineer, Startup Founder, Product Manager และ UX Designer

# 2. เป้าหมาย

## เป้าหมายทางธุรกิจ

- เพิ่มจำนวนผู้สมัคร
- เพิ่มการใช้งาน API
- เพิ่มความน่าเชื่อถือของ Product
- [AMBIGUOUS] ลดภาระของ Team Sales

## เป้าหมายของผลิตภัณฑ์ / Outcomes

- ทำให้ Website อธิบาย Product ได้ด้วยตนเอง
- ทำให้ผู้ใช้เข้าใจ Product ภายในไม่กี่วินาที
- ให้ผู้ใช้ดูราคาและเปรียบเทียบโมเดลได้
- ให้ผู้ใช้สมัครใช้งานได้ทันที
- เพิ่ม Conversion Rate ของการ Sign Up
- เพิ่มจำนวนการกด CTA
- เพิ่มเวลาที่ผู้ใช้ใช้บน Website

# 3. ผู้ใช้ / Personas

## ผู้ใช้หลัก

### Developer

- ต้องการเข้าใจ Product อย่างรวดเร็ว
- ต้องการดูราคาและเปรียบเทียบ AI Models

### AI Engineer

- ต้องการเปรียบเทียบโมเดลและ API
- ต้องการเข้าถึงข้อมูล Documentation ที่รวมไว้ในที่เดียว

## ผู้ใช้รอง

### Startup Founder

- ต้องการเข้าใจ Value ของ Product
- ต้องการประเมินความเหมาะสมก่อนสมัครใช้งาน

### Product Manager

- ต้องการทดลองและเปรียบเทียบ AI Models
- ต้องการดูข้อมูล Product และ Pricing อย่างรวดเร็ว

### UX Designer

- ต้องการทดลองใช้งาน AI
- ต้องการเข้าใจโครงสร้างและความสามารถของ Product

# 4. Use Cases / Jobs To Be Done

- **UC-001:** ในฐานะผู้เยี่ยมชม Website ฉันต้องการเข้าใจว่า AI Hub คืออะไร เพื่อประเมินว่า Product เหมาะกับฉันหรือไม่
- **UC-002:** ในฐานะ Developer หรือ AI Engineer ฉันต้องการดูและเปรียบเทียบ AI Models และราคา เพื่อเลือกโมเดลที่เหมาะสม
- **UC-003:** ในฐานะผู้ใช้ ฉันต้องการดู Feature และความสามารถของ AI Hub เพื่อเข้าใจ Value ของ Product
- **UC-004:** ในฐานะผู้ใช้ ฉันต้องการเปิด Documentation ได้โดยไม่ต้อง Login เพื่อศึกษาข้อมูลก่อนสมัครใช้งาน
- **UC-005:** ในฐานะผู้ใช้ ฉันต้องการกด Get Started เพื่อสมัครใช้งานได้ทันที
- **UC-006:** ในฐานะผู้ใช้ ฉันต้องการดู AI Agents Marketplace Preview เพื่อทำความเข้าใจความสามารถด้าน AI Agents และ Workflow
- **UC-007:** ในฐานะผู้ใช้ ฉันต้องการดู Dashboard Preview เพื่อเห็นภาพการใช้งาน Product เบื้องต้น

# 5. Functional Requirements (Raw)

- **FR-R-001:** ระบบต้องแสดง Hero Section พร้อมข้อความหลักของ Product
- **FR-R-002:** ระบบต้องแสดงรายการ AI Models
- **FR-R-003:** ระบบต้องแสดง Feature Overview และ Feature Cards
- **FR-R-004:** ระบบต้องแสดง Pricing
- **FR-R-005:** ระบบต้องแสดง FAQ
- **FR-R-006:** ระบบต้องแสดง CTA หลายตำแหน่งบน Landing Page
- **FR-R-007:** ระบบต้องแสดง AI Agents Marketplace Preview
- **FR-R-008:** ระบบต้องแสดง Dashboard Preview
- **FR-R-009:** CTA หลักต้องประกอบด้วย Get Started, Explore Models และ View Documentation
- **FR-R-010:** CTA สำหรับเริ่มใช้งานต้องนำผู้ใช้ไปยังหน้าสมัครใช้งาน
- **FR-R-011:** ระบบต้องรองรับ Micro-scroll Animation
- **FR-R-012:** ระบบต้องรองรับ Card Hover
- **FR-R-013:** ระบบต้องรองรับ Number Counter
- **FR-R-014:** ระบบต้องรองรับ Gradient Background Animation
- **FR-R-015:** ระบบต้องรองรับ Smooth Transition
- **FR-R-016:** ระบบต้องใช้ Dark Mode เป็นค่า Default
- **FR-R-017:** Pricing ต้องดึงข้อมูลจากระบบกลาง
- **FR-R-018:** Documentation ต้องเปิดใช้งานได้โดยไม่ต้อง Login
- **FR-R-019:** Hero ต้องแสดง AI Models ล่าสุด
- **FR-R-020:** [AMBIGUOUS] รายการที่ระบุว่า “Features Models” ต้องจัดเรียงตาม Popularity
- **FR-R-021:** ระบบต้องมี Footer
- **FR-R-022:** Landing Page ต้องรองรับลำดับการใช้งานตั้งแต่การดู Hero, Features, AI Models, Pricing, FAQ จนถึงการกด Get Started

# 6. Non-functional Requirements (Raw)

- **NFR-R-001 Performance:** หน้าแรกต้องโหลดเสร็จภายใน 2 วินาที
- **NFR-R-002 Responsive:** ระบบต้องรองรับการแสดงผลบนอุปกรณ์ต่าง ๆ
- **NFR-R-003 SEO:** Website ต้องเป็นมิตรต่อ SEO
- **NFR-R-004 Accessibility:** ระบบต้องรองรับ Accessibility ระดับ AA
- **NFR-R-005 Technology:** ต้องพัฒนาด้วย Next.js
- **NFR-R-006 Deployment:** ต้อง Deploy บน Vercel
- Security: ไม่ได้มีการพูดถึง

# 7. Constraints / Dependencies / Risks

## Constraints

- ต้องใช้ Next.js
- ต้อง Deploy บน Vercel
- ต้องรองรับ Responsive, SEO และ Accessibility
- หน้าแรกต้องโหลดไม่เกิน 2 วินาที

## Dependencies

- ระบบกลางสำหรับข้อมูล Pricing
- Pricing API
- แหล่งข้อมูล AI Models
- Cache สำหรับข้อมูล AI Models
- รูปภาพและ Media ของ Landing Page
- ความสามารถของ Browser ในการรองรับ Animation

## Risks

- หากผู้ใช้ยังไม่เข้าใจ Product อาจทำให้ Conversion ต่ำ
- รูปแบบ Hero ยังไม่ชัดเจน
- ยังไม่ทราบว่าจะมี AI Chat Assistant หรือไม่
- รูปแบบ Pricing ยังไม่สรุป
- ยังไม่ทราบว่าจะเปิด AI Agent Marketplace ใน Version ใด
- ไม่มีการระบุ Baseline และ Target เชิงตัวเลขของ Success Metrics
- ไม่มีการระบุผู้รับผิดชอบและกำหนดส่งของงาน

# 8. Business Rules (Raw)

- Pricing ต้องดึงจากระบบกลาง
- Documentation ต้องเปิดได้โดยไม่ต้อง Login
- CTA ต้องนำไปยังหน้าสมัครใช้งาน
- Hero ต้องแสดง AI Models ล่าสุด
- [AMBIGUOUS] “Features Models” ต้องจัดเรียงตาม Popularity
- Dark Mode ต้องเป็นค่า Default

# 9. Edge Cases / Special Scenarios

- หากโหลด AI Models ไม่ได้ ให้ใช้ข้อมูลจาก Cache
- หาก Pricing API ล่ม ให้แสดง Default Pricing
- หากรูปภาพโหลดไม่ได้ ให้แสดง Placeholder
- หาก Browser ไม่รองรับ Animation ให้แสดงผลเป็น Static

# 10. Out-of-scope

- Blog
- Community
- Dashboard จริง
- Search Capability
- User Login
- Live Playground

# 11. Open Questions / Ambiguities

- วันที่ประชุมไม่ได้ระบุ
- บทบาทอย่างเป็นทางการของผู้เข้าร่วมไม่ได้ระบุ
- [AMBIGUOUS] AI Models และ AI Agents มาจาก “หลาย provider” หรือคำอื่นที่มีความหมายแตกต่างกัน
- [AMBIGUOUS] ข้อความเกี่ยวกับการลดภาระของ Team Sales
- จะใช้ Video Hero หรือ Illustration
- จะมี AI Chat Assistant บนหน้า Website หรือไม่
- รูปแบบ Pricing ที่ต้องใช้
- จะเปิด AI Agent Marketplace ใน Version แรกหรือ Version ถัดไป
- [AMBIGUOUS] ความหมายและขอบเขตของ “Features Models”
- ยังไม่ระบุค่าตัวเลข Baseline และ Target ของ Conversion Rate, CTA Clicks และเวลาบน Website
- ยังไม่ระบุผู้รับผิดชอบของแต่ละ Action Item
- ยังไม่ระบุกำหนดส่งของแต่ละ Action Item
- ยังไม่ระบุ URL หรือปลายทางที่แน่นอนของ CTA แต่ละรายการ
- ยังไม่ระบุรายละเอียดของระบบกลาง, Pricing API, Cache และ Default Pricing
