# PRD: AI Hub Landing Page (PRD-ID: PRD--001)

- เวอร์ชัน: 1.0
- สถานะ: Draft
- Owner: ไม่ระบุ
- อัปเดตล่าสุด: ไม่ระบุ

## 1. Product Context

- ฟีเจอร์/โปรดักต์นี้คืออะไร?
  - AI Hub Landing Page คือหน้า Website สำหรับอธิบาย AI Hub ซึ่งเป็น Platform ที่รวม AI Models และ AI Agents ไว้ในที่เดียว ผู้ใช้สามารถเลือกโมเดล เปรียบเทียบราคา ทดลองใช้งาน และเชื่อมต่อ API ผ่าน Endpoint เดียว
- ทำไมต้องทำตอนนี้? (บริบทธุรกิจ / บริบทผู้ใช้)
  - ลูกค้าส่วนใหญ่ยังไม่เข้าใจว่า Product ทำอะไร และต้องติดต่อ Team Sales ก่อนเริ่มใช้งาน ทำให้เสียเวลาและอาจสูญเสีย Conversion
  - Landing Page ต้องช่วยให้ผู้ใช้เข้าใจ Product ได้ด้วยตนเอง ดูราคา เปรียบเทียบโมเดล และสมัครใช้งานได้ทันที

## 2. Problem Statement

- **P-001:** ลูกค้าไม่เข้าใจว่า AI Hub ทำอะไร
- **P-002:** ลูกค้าต้องติดต่อ Team Sales ก่อนเริ่มใช้งาน ทำให้เสียเวลาและอาจสูญเสีย Conversion
- **P-003:** ผู้ใช้ต้องสมัครหลาย Platform และมี API หลายชุด
- **P-004:** ผู้ใช้เปรียบเทียบโมเดลได้ยาก
- **P-005:** Documentation กระจัดกระจาย
- **P-006:** หากไม่มี Landing Page ผู้ใช้ไม่เข้าใจ Value ของ Product และไม่เริ่มทดลองใช้งาน
- ผู้ที่มีปัญหา: ลูกค้า, Developer, AI Engineer, Startup Founder, Product Manager และ UX Designer

## 3. Goals & Non-goals

- Goals
  - เพิ่มจำนวนผู้สมัคร
  - เพิ่มการใช้งาน API
  - เพิ่มความน่าเชื่อถือของ Product
  - ทำให้ Website อธิบาย Product ได้ด้วยตนเอง
  - ทำให้ผู้ใช้เข้าใจ Product ภายในไม่กี่วินาที
  - ให้ผู้ใช้ดูราคาและเปรียบเทียบโมเดลได้
  - ให้ผู้ใช้สมัครใช้งานได้ทันที
  - เพิ่ม Conversion Rate ของการ Sign Up, จำนวนการกด CTA และเวลาที่ผู้ใช้ใช้บน Website
  - Baseline และ Target เชิงตัวเลข: ไม่ระบุ
- Non-goals
  - Blog
  - Community
  - Dashboard จริง
  - Search Capability
  - User Login
  - Live Playground

## 4. Target Users / Personas

- **Persona 1: Developer** — ผู้ใช้หลักที่ต้องการเข้าใจ Product อย่างรวดเร็ว และดูราคา/เปรียบเทียบ AI Models
- **Persona 2: AI Engineer** — ผู้ใช้หลักที่ต้องการเปรียบเทียบโมเดลและ API และเข้าถึง Documentation ที่รวมไว้ในที่เดียว
- **Persona 3: Startup Founder** — ผู้ใช้รองที่ต้องการเข้าใจ Value ของ Product และประเมินความเหมาะสมก่อนสมัครใช้งาน
- **Persona 4: Product Manager** — ผู้ใช้รองที่ต้องการทดลอง/เปรียบเทียบ AI Models และดูข้อมูล Product กับ Pricing อย่างรวดเร็ว
- **Persona 5: UX Designer** — ผู้ใช้รองที่ต้องการทดลองใช้งาน AI และเข้าใจโครงสร้าง/ความสามารถของ Product

## 5. Use Cases / Jobs To Be Done

- **UC-001:** ในฐานะผู้เยี่ยมชม Website ฉันต้องการเข้าใจว่า AI Hub คืออะไร เพื่อประเมินว่า Product เหมาะกับฉันหรือไม่
- **UC-002:** ในฐานะ Developer หรือ AI Engineer ฉันต้องการดูและเปรียบเทียบ AI Models และราคา เพื่อเลือกโมเดลที่เหมาะสม
- **UC-003:** ในฐานะผู้ใช้ ฉันต้องการดู Feature และความสามารถของ AI Hub เพื่อเข้าใจ Value ของ Product
- **UC-004:** ในฐานะผู้ใช้ ฉันต้องการเปิด Documentation ได้โดยไม่ต้อง Login เพื่อศึกษาข้อมูลก่อนสมัครใช้งาน
- **UC-005:** ในฐานะผู้ใช้ ฉันต้องการกด Get Started เพื่อสมัครใช้งานได้ทันที
- **UC-006:** ในฐานะผู้ใช้ ฉันต้องการดู AI Agents Marketplace Preview เพื่อทำความเข้าใจความสามารถด้าน AI Agents และ Workflow
- **UC-007:** ในฐานะผู้ใช้ ฉันต้องการดู Dashboard Preview เพื่อเห็นภาพการใช้งาน Product เบื้องต้น

## 6. Assumptions / Constraints / Dependencies

### Assumptions

- ไม่มี Assumption ที่ได้รับการยืนยันเพิ่มเติมจาก Raw Requirements
- รายละเอียดที่ยังไม่ชัดเจนหรืออาจเปลี่ยนแปลงได้ถูกระบุไว้ใน `Open Questions`

### Constraints

- ต้องใช้ Next.js
- ต้อง Deploy บน Vercel
- ต้องรองรับ Responsive, SEO และ Accessibility ระดับ AA
- หน้าแรกต้องโหลดไม่เกิน 2 วินาที

### Dependencies

- ระบบกลางสำหรับข้อมูล Pricing
- Pricing API
- แหล่งข้อมูล AI Models
- Cache สำหรับข้อมูล AI Models
- รูปภาพและ Media ของ Landing Page
- ความสามารถของ Browser ในการรองรับ Animation

## 7. Functional Requirements

### FR--001: Hero และข้อความหลักของ Product

- คำอธิบาย: ระบบต้องแสดง Hero Section พร้อมข้อความหลักที่ช่วยอธิบาย AI Hub และทำให้ผู้ใช้เข้าใจ Product ได้อย่างรวดเร็ว
- Problems ที่เกี่ยวข้อง: [P-001, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-001, UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เข้า Landing Page
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เห็นข้อความหลักและเข้าใจภาพรวมของ Product

### FR--002: รายการ AI Models

- คำอธิบาย: ระบบต้องแสดงรายการ AI Models บน Landing Page และ Hero ต้องแสดง AI Models ล่าสุดตาม Business Rule ที่ระบุไว้
- Problems ที่เกี่ยวข้อง: [P-003, P-004]
- Use cases ที่เกี่ยวข้อง: [UC-002]
- ผู้ใช้งานหลัก / actor หลัก: Developer, AI Engineer และผู้ใช้ที่ต้องการทดลอง AI
- Triggers / inputs: ผู้ใช้เลื่อนหรือเข้าถึงส่วน AI Models
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เห็นรายการ AI Models เพื่อใช้ประกอบการเปรียบเทียบ

### FR--003: Feature Overview และ Feature Cards

- คำอธิบาย: ระบบต้องแสดง Feature Overview และ Feature Cards เพื่อให้ผู้ใช้เห็นความสามารถของ AI Hub
- Problems ที่เกี่ยวข้อง: [P-001, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เลื่อนดูส่วน Features
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เข้าใจ Feature และ Value ของ Product มากขึ้น

### FR--004: Pricing

- คำอธิบาย: ระบบต้องแสดง Pricing บน Landing Page โดยข้อมูล Pricing ต้องดึงจากระบบกลาง
- Problems ที่เกี่ยวข้อง: [P-003, P-004]
- Use cases ที่เกี่ยวข้อง: [UC-002, UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เข้าถึงส่วน Pricing
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เห็นข้อมูล Pricing เพื่อประกอบการเปรียบเทียบและตัดสินใจ

### FR--005: FAQ

- คำอธิบาย: ระบบต้องแสดง FAQ บน Landing Page เพื่อให้ผู้ใช้ดูข้อมูลประกอบการทำความเข้าใจ Product
- Problems ที่เกี่ยวข้อง: [P-001, P-005, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-001, UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เข้าถึงส่วน FAQ
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้มีข้อมูลเพิ่มเติมก่อนตัดสินใจสมัครใช้งาน

### FR--006: CTA หลักและ CTA หลายตำแหน่ง

- คำอธิบาย: ระบบต้องแสดง CTA หลายตำแหน่ง โดย CTA หลักประกอบด้วย Get Started, Explore Models และ View Documentation
- Problems ที่เกี่ยวข้อง: [P-002, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-002, UC-004, UC-005]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้กด CTA ที่ต้องการ
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้สามารถไปยังขั้นตอนถัดไปตาม CTA ที่เลือก

### FR--007: การนำผู้ใช้ไปสมัครใช้งาน

- คำอธิบาย: CTA สำหรับเริ่มใช้งานต้องนำผู้ใช้ไปยังหน้าสมัครใช้งาน
- Problems ที่เกี่ยวข้อง: [P-002, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-005]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้กด Get Started
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้ไปยังหน้าสมัครใช้งาน

### FR--008: AI Agents Marketplace Preview

- คำอธิบาย: ระบบต้องแสดง AI Agents Marketplace Preview เพื่อให้ผู้ใช้เห็นความสามารถด้าน AI Agents และ Workflow
- Problems ที่เกี่ยวข้อง: [P-001, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-003, UC-006]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เลื่อนดูส่วน Marketplace Preview
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เข้าใจภาพรวมของ AI Agents และ Workflow

### FR--009: Dashboard Preview

- คำอธิบาย: ระบบต้องแสดง Dashboard Preview เพื่อให้ผู้ใช้เห็นภาพการใช้งาน Product เบื้องต้น โดยไม่รวม Dashboard จริงใน Version นี้
- Problems ที่เกี่ยวข้อง: [P-001, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-003, UC-007]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เลื่อนดูส่วน Dashboard Preview
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เห็นภาพรวมการใช้งาน Product

### FR--010: Documentation แบบไม่ต้อง Login

- คำอธิบาย: ระบบต้องเปิดให้ผู้ใช้เข้าถึง Documentation ได้โดยไม่ต้อง Login
- Problems ที่เกี่ยวข้อง: [P-002, P-005, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-004]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้กด View Documentation
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เปิด Documentation ได้โดยไม่ต้องยืนยันตัวตน

### FR--011: Animation และ Interaction

- คำอธิบาย: ระบบต้องรองรับ Micro-scroll Animation, Card Hover, Number Counter, Gradient Background Animation และ Smooth Transition
- Problems ที่เกี่ยวข้อง: [P-001, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-001, UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เลื่อนหน้าเว็บหรือโต้ตอบกับองค์ประกอบที่รองรับ Interaction
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้เห็น Animation และ Interaction ตามที่กำหนด

### FR--012: Dark Mode

- คำอธิบาย: ระบบต้องใช้ Dark Mode เป็นค่า Default ของ Landing Page
- Problems ที่เกี่ยวข้อง: [P-001, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-001, UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เปิด Landing Page
- ผลลัพธ์ที่คาดหวัง: Landing Page แสดงผลด้วย Dark Mode เป็นค่าเริ่มต้น

### FR--013: ลำดับเนื้อหาและ Footer ของ Landing Page

- คำอธิบาย: Landing Page ต้องรองรับลำดับการดูเนื้อหาตั้งแต่ Hero, Features, AI Models, Pricing, FAQ จนถึง Get Started และต้องมี Footer
- Problems ที่เกี่ยวข้อง: [P-001, P-002, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-001, UC-002, UC-003, UC-005]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: ผู้ใช้เข้าและเลื่อนดู Landing Page
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้สามารถเดินตามลำดับการทำความเข้าใจ Product และไปยัง CTA ได้

### FR--014: Fallback ของข้อมูลและ Media

- คำอธิบาย: ระบบต้องรองรับกรณีโหลด AI Models ไม่ได้ด้วยข้อมูลจาก Cache กรณี Pricing API ล่มด้วย Default Pricing และกรณีรูปภาพโหลดไม่ได้ด้วย Placeholder
- Problems ที่เกี่ยวข้อง: [P-001, P-004, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-002, UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: การโหลดข้อมูลหรือรูปภาพเกิดข้อผิดพลาด
- ผลลัพธ์ที่คาดหวัง: Landing Page ยังคงแสดงข้อมูลทดแทนตามกรณีที่กำหนด

### FR--015: Static Fallback สำหรับ Animation

- คำอธิบาย: หาก Browser ไม่รองรับ Animation ระบบต้องแสดงผลเป็น Static แทน
- Problems ที่เกี่ยวข้อง: [P-001, P-006]
- Use cases ที่เกี่ยวข้อง: [UC-001, UC-003]
- ผู้ใช้งานหลัก / actor หลัก: ผู้เยี่ยมชม Website
- Triggers / inputs: Browser ไม่รองรับ Animation
- ผลลัพธ์ที่คาดหวัง: ผู้ใช้ยังเห็นเนื้อหา Landing Page ในรูปแบบ Static

## 8. Non-functional Requirements

- Performance: หน้าแรกต้องโหลดเสร็จภายใน 2 วินาที
- Reliability: ต้องมี Fallback สำหรับ AI Models, Pricing, รูปภาพ และ Animation ตาม FR--014 และ FR--015
- Security / privacy: ไม่ได้มีการพูดถึง Security หรือ Privacy โดยตรง
- UX / accessibility:
  - ต้องรองรับ Responsive บนอุปกรณ์ต่าง ๆ
  - ต้องเป็นมิตรต่อ SEO
  - ต้องรองรับ Accessibility ระดับ AA
  - ต้องใช้ Dark Mode เป็นค่า Default
- Technology / deployment: ต้องใช้ Next.js และ Deploy บน Vercel

## 9. Business Rules

- **BR--001:** Pricing ต้องดึงจากระบบกลาง
- **BR--002:** Documentation ต้องเปิดได้โดยไม่ต้อง Login
- **BR--003:** CTA สำหรับเริ่มใช้งานต้องนำไปยังหน้าสมัครใช้งาน
- **BR--004:** Hero ต้องแสดง AI Models ล่าสุด
- **BR--005:** Dark Mode ต้องเป็นค่า Default
- **BR--006 [AMBIGUOUS]:** มีการระบุว่า “Features Models” ต้องจัดเรียงตาม Popularity แต่ความหมายและขอบเขตของคำนี้ยังไม่ชัดเจน

## 10. User Flows (High-level)

- **FLOW--001: ทำความเข้าใจและประเมิน Product**
  1. ผู้ใช้เข้า Landing Page
  2. ผู้ใช้ดู Hero และข้อความหลัก
  3. ผู้ใช้ดู Features
  4. ผู้ใช้ดู AI Models
  5. ผู้ใช้ดู Pricing
  6. ผู้ใช้อ่าน FAQ

- **FLOW--002: เริ่มสมัครใช้งาน**
  1. ผู้ใช้เข้าชมเนื้อหาบน Landing Page
  2. ผู้ใช้กด Get Started
  3. ระบบนำผู้ใช้ไปยังหน้าสมัครใช้งาน

## 11. Edge Cases & Error Scenarios

- หากโหลด AI Models ไม่ได้ ให้ใช้ข้อมูลจาก Cache
- หาก Pricing API ล่ม ให้แสดง Default Pricing
- หากรูปภาพโหลดไม่ได้ ให้ใช้ Placeholder
- หาก Browser ไม่รองรับ Animation ให้แสดงผลเป็น Static

## 12. Out-of-scope

- Blog
- Community
- Dashboard จริง
- Search Capability
- User Login
- Live Playground
- การระบุว่าจะเปิด AI Agent Marketplace แบบเต็มรูปแบบใน Version ใด ยังไม่ใช่ข้อสรุปของ PRD ฉบับนี้

## 13. Success Metrics

- Conversion Rate ของการ Sign Up เพิ่มขึ้น — Baseline และ Target: ไม่ระบุ
- จำนวนการกด CTA เพิ่มขึ้น — Baseline และ Target: ไม่ระบุ
- เวลาที่ผู้ใช้ใช้บน Website เพิ่มขึ้น — Baseline และ Target: ไม่ระบุ
- การใช้งาน API เพิ่มขึ้น — Baseline และ Target: ไม่ระบุ
- จำนวนผู้สมัครเพิ่มขึ้น — Baseline และ Target: ไม่ระบุ
- ความน่าเชื่อถือของ Product เพิ่มขึ้น — วิธีวัดและ Target: ไม่ระบุ

## 14. Acceptance Criteria (แยกตาม FR)

### AC--001 [DRAFT] (สำหรับ FR--001)

GIVEN ผู้ใช้เข้า Landing Page  
WHEN หน้าเว็บโหลดเสร็จ  
THEN ระบบต้องแสดง Hero Section และข้อความหลักของ Product

### AC--002 [DRAFT] (สำหรับ FR--002)

GIVEN ผู้ใช้เข้าถึงส่วน AI Models  
WHEN รายการโมเดลพร้อมแสดงผล  
THEN ระบบต้องแสดงรายการ AI Models และ Hero ต้องแสดง AI Models ล่าสุด

### AC--003 [DRAFT] (สำหรับ FR--003)

GIVEN ผู้ใช้เลื่อนดูส่วน Features  
WHEN ส่วน Feature Overview ถูกแสดง  
THEN ระบบต้องแสดง Feature Overview และ Feature Cards

### AC--004 [DRAFT] (สำหรับ FR--004)

GIVEN ผู้ใช้เข้าถึงส่วน Pricing  
WHEN ระบบมีข้อมูลจากระบบกลาง  
THEN ระบบต้องแสดง Pricing บน Landing Page

### AC--005 [DRAFT] (สำหรับ FR--005)

GIVEN ผู้ใช้เข้าถึงส่วน FAQ  
WHEN ส่วน FAQ ถูกแสดง  
THEN ระบบต้องแสดง FAQ บน Landing Page

### AC--006 [DRAFT] (สำหรับ FR--006)

GIVEN ผู้ใช้เข้าชม Landing Page  
WHEN ระบบแสดง CTA  
THEN ระบบต้องแสดง CTA หลัก ได้แก่ Get Started, Explore Models และ View Documentation ในตำแหน่งที่กำหนด

### AC--007 [DRAFT] (สำหรับ FR--007)

GIVEN ผู้ใช้อยู่บน Landing Page  
WHEN ผู้ใช้กด Get Started  
THEN ระบบต้องนำผู้ใช้ไปยังหน้าสมัครใช้งาน

### AC--008 [DRAFT] (สำหรับ FR--008)

GIVEN ผู้ใช้เลื่อนดูส่วน Marketplace Preview  
WHEN ส่วนดังกล่าวถูกแสดง  
THEN ระบบต้องแสดง AI Agents Marketplace Preview

### AC--009 [DRAFT] (สำหรับ FR--009)

GIVEN ผู้ใช้เลื่อนดูส่วน Dashboard Preview  
WHEN ส่วนดังกล่าวถูกแสดง  
THEN ระบบต้องแสดงภาพตัวอย่าง Dashboard โดยไม่เปิดใช้ Dashboard จริงใน Version นี้

### AC--010 [DRAFT] (สำหรับ FR--010)

GIVEN ผู้ใช้อยู่บน Landing Page  
WHEN ผู้ใช้กด View Documentation  
THEN ผู้ใช้ต้องเปิด Documentation ได้โดยไม่ต้อง Login

### AC--011 [DRAFT] (สำหรับ FR--011)

GIVEN ผู้ใช้โต้ตอบกับ Landing Page  
WHEN ผู้ใช้เลื่อนหน้าหรือชี้ไปยังองค์ประกอบที่รองรับ Interaction  
THEN ระบบต้องรองรับ Animation หรือ Interaction ตามที่ระบุ

### AC--012 [DRAFT] (สำหรับ FR--012)

GIVEN ผู้ใช้เปิด Landing Page  
WHEN หน้าเว็บเริ่มแสดงผล  
THEN ระบบต้องใช้ Dark Mode เป็นค่า Default

### AC--013 [DRAFT] (สำหรับ FR--013)

GIVEN ผู้ใช้เข้าชม Landing Page  
WHEN ผู้ใช้เลื่อนดูเนื้อหา  
THEN ระบบต้องรองรับลำดับ Hero, Features, AI Models, Pricing, FAQ, Get Started และมี Footer

### AC--014 [DRAFT] (สำหรับ FR--014)

GIVEN การโหลด AI Models, Pricing หรือรูปภาพเกิดข้อผิดพลาด  
WHEN ระบบตรวจพบข้อผิดพลาด  
THEN ระบบต้องใช้ Cache, Default Pricing หรือ Placeholder ตามประเภทของข้อมูลที่ล้มเหลว

### AC--015 [DRAFT] (สำหรับ FR--015)

GIVEN Browser ไม่รองรับ Animation  
WHEN Landing Page แสดงผล  
THEN ระบบต้องแสดงเนื้อหาในรูปแบบ Static

## 15. Open Questions

- วันที่ประชุมและวันที่อัปเดต PRD ไม่ได้ระบุ
- Owner และผู้รับผิดชอบของแต่ละงานไม่ได้ระบุ
- กำหนดส่งของแต่ละงานไม่ได้ระบุ
- [AMBIGUOUS] AI Models และ AI Agents มาจาก “หลาย provider” หรือคำอื่นที่มีความหมายแตกต่างกัน
- [AMBIGUOUS] เป้าหมายเรื่องการลดภาระของ Team Sales
- จะใช้ Video Hero หรือ Illustration
- จะมี AI Chat Assistant บนหน้า Website หรือไม่
- รูปแบบ Pricing ที่ต้องใช้
- จะเปิด AI Agent Marketplace ใน Version แรกหรือ Version ถัดไป
- [AMBIGUOUS] ความหมายและขอบเขตของ “Features Models” รวมถึงเกณฑ์การจัดเรียงตาม Popularity
- ยังไม่ระบุ URL หรือปลายทางที่แน่นอนของ CTA แต่ละรายการ
- ยังไม่ระบุรายละเอียดของระบบกลาง, Pricing API, Cache และ Default Pricing
- ยังไม่ระบุ Baseline และ Target ของ Success Metrics
- ยังไม่ระบุ Security หรือ Privacy Requirements

## 16. Changelog

- v1.0 - ดราฟต์แรกจาก discovery meeting
