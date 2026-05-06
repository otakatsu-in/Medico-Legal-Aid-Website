import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Tip {
  number: number;
  title: string;
  content: string;
}

const tips: Tip[] = [
  {
    number: 1,
    title: "LAMA Patients Still Need a Discharge Summary",
    content: `Doctors often mistakenly believe that patients who leave against medical advice (LAMA) do not need a discharge summary.

Legal Obligation: All patients have the right to receive their treatment details, reports, and a discharge summary, regardless of whether they continue treatment or leave against medical advice.

Special Attention Required: Extra caution is necessary for patients leaving against medical advice. These patients are more likely to experience complications, and may even deteriorate or die during transport to another hospital.

Legal Defense: The discharge summary is a crucial document that can defend doctors in a court of law. It must be provided at the time of discharge, even if the patient is leaving against advice.

Document Patient Condition: The discharge summary should clearly mention any hemodynamic instability, such as unstable vitals, inotropic support, oxygen support, etc. It should also document that the patient's attendants have been informed about the need for continued care, the risks of discontinuation, and transportation risks, despite which they chose to leave.

Avoid Suspicion: Not providing a discharge summary can create suspicion and increase the likelihood of legal action by the patient. It may appear to the judge that the doctor is attempting to hide potential negligence.

Best Practice: A meticulously prepared discharge summary for LAMA patients can serve as a vital defense if a legal case is filed.`,
  },
  {
    number: 2,
    title: "Blanket Consent Is Not Valid",
    content: `Scenario: It is common for an operating surgeon to start with one diagnosis and discover another condition requiring a different procedure during surgery. For example, appendicitis might turn out to be intussusception, or cholecystitis might be found to be pyelonephritis.

Legal Principle: While it makes medical sense to proceed with the necessary new procedure to save time and money, the law is clear: consent for one procedure cannot be used as consent for a different procedure unless it is a life-saving emergency.

Case Reference: This principle was clearly explained in the Supreme Court judgment Samira Kohli vs Dr. Prabha Manchanda & Anr (January 16, 2008). A woman was scheduled for a diagnostic laparoscopy, found to have extensive endometriosis, and a hysterectomy was performed under the same anesthesia. The court found the doctor negligent for not taking consent for the hysterectomy and awarded compensation.

Examples of invalid blanket consent:
- One cannot perform orchidopexy and phimosis correction with only orchidopexy consent unless consent is specifically taken for both.
- One cannot take consent for a diagnostic laparotomy and then operate for a torsion ovarian cyst.
- One cannot take consent for intubation and then insert a central line with the same consent.

Recommendation: If a new procedure is required, doctors should take new consent from close relatives. For major surgeries like orchidectomy, hysterectomy, or oophorectomy, it is advisable to wait for the patient to come out of anesthesia and give consent. Remember, for adults, proxy consent is not valid.`,
  },
  {
    number: 3,
    title: "Patient Admission and Financial Constraints",
    content: `Many times, patients get admitted initially to a hospital. However, after a few days of treatment, they may find the private hospital charges unaffordable and request a referral to a government hospital.

Legal Faults:
1. Discontinuing Treatment: Discontinuing a treatment that has already been started is strictly against the law.
2. Referring Patients Due to Fees: Referring patients because they are unable to pay the fees is also a legal issue.

Patient's Perspective: When a patient or their attendants file a case, they will never admit requesting a referral to a government hospital. Instead, they may claim that the doctors stopped treatment due to non-payment of hospital fees.

Case Law: In Pravat Kumar Mukherjee vs. Ruby General Hospital & Ors (25 April, 2005), the judge questioned, "Can doctors insist and wait for money (fees) when death is knocking the doors of the patient?" The answer: "Recovery of fee can wait — but not the death nor the treatment for trying to save the life." Rs 1.3 crore was awarded as compensation.

Never write that a patient was referred to a government hospital due to financial constraints. This can be legally damaging.

Recommended Phrases for Referral Letters:
- "Patient was referred for multidisciplinary care."
- "Patient requested a government hospital referral; hence referred after explaining all the risks."
- "Patient attenders want to continue treatment at the nearby government hospital."
- "In the best interest of the patient and at the request of the attenders, the patient was referred to a higher center."

Always focus on medical justifications for any referrals or transfers.`,
  },
  {
    number: 4,
    title: "Signature and Identification Marks on Medical Certificates",
    content: `When drafting a medical certificate (leave certificate, fitness certificate, wound certificate, etc.), it is imperative to verify the identity of the patient and document it on the certificate. This ensures that the certificate is issued to the individual who was actually examined.

Fraudulent scenarios do occur — for example, a person with normal vision presenting under a false name to obtain a visual acuity certificate that another person then uses to apply for a driving license or insurance fraud.

To mitigate such fraudulent activities:

1. Obtain Signature or Thumb Impression: Secure the signature or thumb impression of the individual on the certificate, along with the signature of the issuing doctor.

2. Document Identification Marks: Record at least two identification marks of the individual on whose name the certificate is issued.

3. Specify the Purpose: Clearly state the purpose of issuing the certificate. For instance: "This certificate was issued for the purpose of joining a fitness club."

4. Include Time and Date: Always include the time and date of issuance. Retain a photocopy of the certificate, if feasible, especially when issuing medico-legal certificates.

Adhering to these four points:
- Prevents Transfer: The certificate cannot be transferred to another individual.
- Facilitates Future Verification: When called upon to verify the certificate in court after several years, having documented identification marks will be crucial as cases can arise 5 to 10 years post-issuance.`,
  },
  {
    number: 5,
    title: "Consent Is Not Required to Register an MLC",
    content: `What is an MLC Case? A Medico-Legal Case (MLC) is a case of ailment where investigation by law enforcement agencies is essential to determine the causes.

Concept Behind Police Intimation: Intimating a case as an MLC is merely informing the police that an event has occurred which requires their attention. It is not a complaint or a case filing.

Misconceptions Among Doctors: Many doctors mistakenly believe that by intimating an MLC, they are filing a complaint, initiating a case, or that the patient or themselves will be dragged to court for all MLC intimations.

What Happens After You Intimate: Once the police receive an intimation, they do not immediately file a case or FIR. They will visit the patient, collect information, and conduct a preliminary enquiry. Cases like self-fall, snake bite, or attempted suicide are often closed without further issues.

Consent and MLC: It is purely at the discretion of the attending doctor to decide when to label a case as an MLC. The request of the patient or the accompanying relatives for registering or not registering the case as an MLC is irrelevant. Consent of the patient or family members is not required.

Categories of Cases to be Labelled as MLC:
1. Cases of attempted abortion by an unauthorized person
2. Cases of snake bite, scorpion sting, animal bites
3. Cases of unknown unconscious patients
4. Persons under police or judicial custody
5. Cases of domestic violence
6. Cases of child abuse
7. Cases of human rights violations
8. Brought dead cases
9. Sudden death cases
10. Deaths occurring during any medical or surgical procedure
11. Any other case with legal implications or suspicious circumstances

Golden Points to Remember:
- No need for consent to make an MLC; attendants have no role in this.
- Making an MLC does not mean filing an FIR or giving a complaint.
- Doctors will not be punished if they mistakenly report a non-MLC as an MLC.
- The doctor's duty is just to intimate; further actions will be taken by the police.`,
  },
  {
    number: 6,
    title: "Limitations of Consent — Consent Cannot Legalize Illegal Acts",
    content: `Many doctors believe that obtaining consent allows them to do anything, but this is not legally accurate. Consent is not valid for illegal activities.

Example 1: If I take written consent from you stating that you will not hold me responsible and then sell you cocaine, it does not make the act legal. Selling cocaine is illegal regardless of consent.

Example 2: If an adult patient wants to commit suicide and provides written consent for it, and we supply poison to them, we are not legally protected. Assisting someone in committing suicide is illegal, regardless of their consent.

Key Concept: Consent is not valid for illegal activities. Even if you perform illegal activities with consent, they remain illegal.

Medical Practice Example — Termination of Pregnancy at 28 Weeks: Even with the consent of the husband, wife, and parents, terminating a pregnancy at 28 weeks is illegal without court permission. If any relative later files a complaint about the termination of a 28-week pregnancy, the doctor can be held criminally negligent. The consent given by the family members will not be valid because the acts themselves are illegal.

Recommendations for Doctors:
1. Be Aware of Legal Limitations: Ensure you are well-informed about what actions are legal and illegal in medical practice.
2. Understand the Limits of Consent: Just because you have obtained signatures does not mean you are authorized to perform any action on the patient.`,
  },
  {
    number: 7,
    title: "Documenting Contributory Negligence in the Case Sheet",
    content: `Under the law, if a patient has been negligent and their negligence has contributed to the damage, the defense of contributory negligence can be invoked by the doctor. In such situations, the compensation awarded will be reduced, taking into account the patient's share of responsibility.

Decided Case Laws:
1. Devendar Singh v. Vivek Pal: The patient did not attend follow-up appointments and used prolonged medication on their own. The doctor was held liable for only limited compensation as the patient was found guilty of contributory negligence.
2. Rohini Devi v. Dr. H.S. Chandavat: The patient did not attend follow-up appointments after surgery. The doctor was held not liable.
3. Manager, Martin Medical Centre v. E.V. Thomas: The doctor provided first aid and treated an accident victim, later referring the patient to another hospital. The patient did not follow the doctor's advice, resulting in reduced compensation.

Examples of Contributory Negligence:
1. Failure to provide the doctor with an accurate medical history or hiding relevant medical history
2. Refusal to take the suggested treatment
3. Leaving the hospital against the doctor's advice
4. Not following post-operative advice
5. Not adhering to proper physiotherapy protocols
6. Refusing to get admitted to the ICU when advised

The Importance of Documenting Contributory Negligence: Always highlight instances of contributory negligence in your OPD or inpatient case sheets at the beginning of your notes. Once documented, it becomes a legal record. No documentation means no defense.`,
  },
  {
    number: 8,
    title: "Timing of Taking Consent — Prior Informed Consent",
    content: `A new trend has emerged where patients, even after signing the consent form, claim in court that the procedure was not properly explained and that they signed in a hurry. This has become a significant issue for doctors.

Prior Informed Consent: The concept of consent has evolved from "informed consent" to "prior informed consent." Courts now expect doctors to inform patients about procedures well in advance, allowing them ample time to consider the information and make an informed decision. In some instances, consent obtained just half an hour before surgery has been deemed invalid.

Timing of Consent: To avoid such situations, it is advisable for doctors to take consent a few hours before the procedure for all elective surgeries. For example, if you are planning a hernia surgery, the consent can be taken a day before the surgery when the patient is admitted for pre-anaesthesia evaluation.

Consent Not Understood: Another issue raised by patients is that the consent was not explained properly and was in English, which they did not understand.

Patient's Handwritten Note: To avoid such litigations, it is better to ask the patient or their representative to write a few lines in their own language on the consent form, stating that the procedure and its complications have been explained to them.

Best Practices:
1. Take consent a few hours before the surgery.
2. Avoid taking consent just before the procedure, unless it is an emergency.
3. Have the patient write a few sentences in their own handwriting to confirm understanding.`,
  },
  {
    number: 9,
    title: "Never Take Signatures on Blank Papers",
    content: `Common Practice: Many doctors take signatures on blank papers before performing procedures, after explaining high risks, or during hospital admission. Doctors often forget to complete these blanks which results in incomplete files ending up in the medical records department.

Legal Implications:
- Court Cases: If a patient files a case and the judge discovers a signature on a blank paper, it can significantly tarnish the doctor's image, suggesting an attempt to hide facts or cheat the patient. This can lead to the doctor being held liable and all consents being invalidated.
- Evidence: Relatives of patients sometimes take photos of the signed blank paper, which can be used against the doctor later.

Case Example: A hospital was fined ₹1,00,000 just for taking a signature on a blank paper, even though medical negligence was not proved. This highlights the severe consequences of such practices.

Recommendations:
1. Detail Before Signature: Always write procedure details or high-risk counseling information before obtaining the patient's signature.
2. Counter-Signatures: The person taking the consent should also countersign the document.
3. Check Case Sheets: Doctors should check the case sheet at the time of discharge and fill up all blank sheets to avoid future legal issues.
4. Complete Consent Forms: Ensure the consent form is completely filled before it is sent to the medical records department.

Obtaining consent on a blank paper can be considered fraudulent by the court.`,
  },
  {
    number: 10,
    title: "Document Allergy History in Every Prescription",
    content: `Medical practitioners face numerous challenges when it comes to drug reactions, ranging from mild to severe, like Stevens-Johnson syndrome and even death. These situations often lead to medical negligence cases.

The Gray Area of Allergy Testing: The decision to conduct drug or allergy testing is complex. Courts have both supported and rejected the necessity of allergy testing depending on the individual case.

The Risk of Allergic Reactions: All substances, regardless of previous usage, dosage, or route of administration (oral or intravenous), can potentially cause allergies, anaphylaxis, and even death.

Legal and Medical Precautions: To ensure legal safety, it is prudent for doctors to ask about the patient's history of allergies and record it in the OPD sheet. This serves two purposes:
1. Legal Protection: In case of any adverse reactions, the recorded history can demonstrate that the patient reported no known allergies, supporting the doctor's decision not to perform allergy testing.
2. Improved Patient Care: Many patients may not disclose their allergy history unless specifically asked, so this practice can help in identifying potential risks.

Implementation in Practice: It is recommended that every doctor includes a section in the OPD sheet to record the patient's allergy history along with other information like weight and vitals.

Print this in your prescription:
History of allergy: Yes / No`,
  },
  {
    number: 11,
    title: "Advertisements in Medical Practice Can Lead to Legal Trouble",
    content: `In today's competitive medical field, doctors often use advertisements to attract patients, claiming high success rates or 100% recovery. However, doctors are governed by the Consumer Protection Act and the Code of Ethics Regulations 2002, which prohibit making exaggerated claims about treatments and recovery.

Real Case Scenarios:
1. Ophthalmologist's Claim: An advertisement claimed 100% spectacle-free vision after laser eye surgery. The patient went to court when results did not match the claims. The judge ruled this as a misleading advertisement.

2. Gynecologist's Claim: An advertisement claimed a 70% success rate for IVF treatments. The actual success rate was only 15-20%, acknowledged in a consent form. When treatment failed, the patient used the advertisement as evidence of misleading claims.

Legal Implications: Discrepancies between advertised success rates and those mentioned in consent forms were deemed misleading. The judge concluded that the doctors had published false claims to attract patients. Both the doctors and hospitals were found guilty of adopting unfair trade practices under the Consumer Protection Act.

Advice for Medical Practitioners:
1. Adhere to Advertising Rules: Follow the rules under the Consumer Protection Act and the Code of Ethics Regulations 2002.
2. Avoid Unsubstantiated Claims: Do not publish numerical claims in percentages without proper proof.
3. Consistency in Communication: Ensure that the success rates in advertisements match those explained to patients during the consent process.
4. Be Cautious: Understand that paper advertisements can be used as legal evidence by patients.`,
  },
  {
    number: 12,
    title: "Withholding a Dead Body for Lack of Payment Is Illegal",
    content: `It is not uncommon for hospitals or nursing homes to refuse to release a deceased patient's body due to unpaid bills. However, the law is very clear and strict on this matter.

Legal Standpoint: Article 21 of India's Constitution guarantees all citizens the right to personal liberty and forbids inhumane treatment. Withholding a deceased person's body is not only illegal but also barbaric and torturous for both the individual detained and their relatives.

In Devesh Singh Chauhan v. State & Ors. 2017, the Delhi High Court clearly stated: "Merely because the dues of the hospital treating the patient are outstanding, that certainly cannot be a reason to withhold the release of the patient."

As per the Charter of Patient's Rights adopted by the National Human Rights Commission, "caretakers have the right to the dead body of a patient who had been treated in a hospital and the dead body cannot be detained on procedural grounds, including nonpayment of hospital charges."

Steps that can be taken by Patients/Relatives:
1. File a Complaint: A simple written complaint to the nearby police station, district commissioner, or human rights commission is sufficient to get the body released.
2. Media Involvement: Informing the media can also help, as they often create pressure on the hospital to comply.

Financial Considerations for Hospitals: Hospitals can file a civil suit against the patient's attendants for non-payment after handing over the dead body. One cannot hold a dead body or a patient hostage for the payment of hospital bills.`,
  },
  {
    number: 13,
    title: "Treating Patients Under 18 Years Old",
    content: `Legal Requirement: Only individuals 18 years or older can give valid consent for medical treatment and procedures. For minors, consent must be provided by a parent or guardian.

Common Confusion: College students in grades 10-12 staying in hostels often visit doctors without guardians. Many doctors treat these students or perform minor procedures without knowing the legal implications.

Legal Fault: Consent from a minor is not legally valid. Any procedure performed without proper guardian consent can lead to legal complications.

Example: A 17-year-old pre-college student comes to you with a fever and a small abscess. You prescribe antibiotics and perform an incision and drainage procedure. However, the patient develops a serious complication. The parents may argue in court that the child's consent was invalid, regardless of the doctor's good intentions.

Tips for Examining Patients Under 18 Years Old:
1. Always ask for a guardian to accompany the child, whether it is a hostel warden, teacher, or a parent's friend who is available locally.
2. Do not consider the patient's friend as a legal guardian because they are also a minor, and their consent will not be valid.
3. You do not need to take consent when the situation is life-threatening or an emergency. Even if the patient has come alone, you can still proceed with treatment.

Best Practice:
- Always ensure a guardian is present to provide consent unless it is a life-threatening emergency.
- Consent from minors is not valid.
- Do not treat minors without a guardian unless it is an emergency.`,
  },
  {
    number: 14,
    title: "Free Patients Can Also File Cases in Consumer Court",
    content: `It is a common practice among doctors to treat economically disadvantaged patients without charging them. However, this is often accompanied by neglect of proper documentation. Many times, doctors merely prescribe medications on a slip without writing proper notes. This casual attitude stems from the mistaken belief that patients who receive free treatment are not eligible to file a case in consumer court — which is incorrect.

Understanding the Consumer Protection Act:
- Hospitals/Clinics that charge some patients and exempt others due to their inability to afford services are governed by the Consumer Protection Act.
- Only hospitals where ALL patients receive free treatment, irrespective of their paying capacity, are exempt from the purview of the Act.
- All legal requirements, such as taking proper history, obtaining consent, documenting thoroughly, and adhering to prescription protocols, should be followed in all cases, even if you are not charging patients.

Tips to Remember:
- Waiving charges for patients does NOT exempt healthcare providers from their legal responsibilities. Free patients can also be potential litigants.
- For all practical purposes, all cases have the right to file a case in consumer court except in very few instances.
- Doctors must stop casual documentation habits when treating free cases, whether in OPD or IPD, and protect themselves from future litigations.`,
  },
  {
    number: 15,
    title: "Non-Compliance with the POCSO Act Can Land You in Jail",
    content: `Definition of Sexual Assault: Any sexual activity involving a child under 18 years of age is considered sexual assault, regardless of the child's consent or marital status.

Supreme Court Ruling: The Supreme Court of India, in Independent Thought vs Union of India (October 11, 2017), ruled that sexual intercourse with a girl below 18 years of age is considered rape, even if she is a wife.

Mandatory Reporting: Doctors are legally required to report cases involving sexual activity with children under 18 years of age to the police. This includes:
- Situations where a married girl under 18 comes for antenatal check-up/delivery with her husband.
- Romantic relationships between students under 18 that result in physical intimacy.

To ensure confidentiality, doctors can report only the IP number and address of the child without disclosing the child's name.

Consequences of Non-Compliance: Failure to report such cases is a punishable offense under Section 21 of the POCSO Act:
- For individuals: Imprisonment of up to 6 months, a fine, or both.
- For institutions: Imprisonment of up to 1 year, along with a fine.

Important Reminder: Doctors must remember that they are not authorized to judge the validity of a child's consent. If the girl later files a rape case, doctors who failed to report the case initially can face serious legal consequences.

It is critical for doctors to report all cases of sexual activity involving children under 18 to the police. This is a mandatory legal obligation under the POCSO Act.`,
  },
  {
    number: 16,
    title: "Never Write 'To Whomsoever It May Concern' on Certificates",
    content: `Using generic phrases like "To Whomsoever It May Concern" in medical certificates is a common practice among doctors. However, this can lead to legal complications.

Case in Point: A psychiatrist issued a medical certificate with the heading "To Whomsoever It May Concern." The certificate detailed the patient's medical condition, as requested by her husband, who claimed it was needed for seeking a second opinion. Later, the husband used the certificate in a family court case to apply for a divorce. The wife filed a case against the doctor for breaching privacy, and the court criticized the doctor for carelessly issuing a certificate without mentioning its purpose.

Such certificates can also be misused to:
- Avoid a court warrant.
- Claim money fraudulently without the doctor's knowledge.

Recommendations to Avoid Legal Issues:

Avoid Generic Headings: Do not use vague phrases like "To Whomsoever It May Concern." Instead, address the certificate to a specific individual, organization, or institution.

Clearly State the Purpose: Always mention why the certificate is being issued. For example:
- "This certificate is issued for submission to [specific institution]."
- "This certificate is issued for seeking a second opinion."

This ensures the certificate cannot be used for any other purpose.`,
  },
  {
    number: 17,
    title: "Document the Serious Condition of the Patient in Admission Notes",
    content: `The Problem: When critically ill patients arrive at hospitals, consultants often focus on urgent treatment. Meanwhile, junior doctors handle the case sheet writing part. Sadly, these notes are sometimes written casually and fail to reflect the patient's critical condition upon arrival.

Why Poor Notes Can Cause Problems: In many cases, patients arrive on trolleys, semiconscious or even unresponsive. However, case sheets may be casually written like "Vitals are normal, GCS is 15/15, CNS is within normal limits." Such errors can create serious legal trouble later. Opposite lawyers might argue that the patient was stable upon arrival, and died because of doctor negligence — supported by normal admission vitals carelessly written in the case sheet.

Why Good Documentation Is Critical:
- Patients won't always be alive later to explain how critically ill they were when they arrived.
- Family members may not confirm the seriousness of the initial condition.

What to Include in Admission Notes: Always record findings that highlight the patient's critical condition, such as:
- Bradycardia or Tachycardia
- Respiratory failure (e.g., low saturation)
- Low GCS or confusion
- Hypotension
- Bleeding tendencies
- Severe dehydration
- Very low urine output

Action Points for Doctors:
1. Document Thoroughly: Case sheets must reflect the seriousness of the patient's condition.
2. Consultants, Stay Vigilant: Make it a habit to review the admission notes of all critically ill patients under your care.

Accurate notes at the time of admission are your strongest legal defense!`,
  },
  {
    number: 18,
    title: "Documenting Contributory Negligence Can Save Lakhs in Compensation",
    content: `Under the Law: If a patient's negligence contributes to the damage, doctors can invoke the defense of contributory negligence. This can significantly reduce the compensation awarded, based on the patient's share of responsibility.

Decided Case Laws on Contributory Negligence:
1. Devendar Singh v. Dr. xyz: The patient was advised to use Mitomycin-C for two weeks after surgery for Pterygium. They missed follow-up appointments and overused medication, leading to complete loss of vision. The doctor's liability was limited, and compensation was reduced from ₹10 lakhs to ₹50,000.
2. xyz v. E.V. Thomas: The doctor gave first aid for a knee injury and advised the patient to shift to a better-equipped hospital. The patient delayed this by 10 days, worsening the condition. The compensation was reduced to ₹10,000 as the patient was partly negligent.

Examples of Contributory Negligence:
1. Hiding relevant medical history despite being asked
2. Refusing to take the suggested treatment
3. Leaving the hospital against medical advice (LAMA)
4. Not following post-operative advice
5. Skipping physiotherapy protocols
6. Refusing ICU admission when advised

Importance of Documenting Contributory Negligence:
1. Missed Follow-Up Appointments: Document if the patient does not follow up as advised.
2. Incomplete Antibiotic Course: Record instances where patients fail to complete their prescribed course of antibiotics.
3. Non-Adherence to Medical Advice: Note down if patients ignored dietary or physiotherapy recommendations.
4. Self-Medication: Include details of any self-medication and delay in consulting doctor.

Key Takeaway: Always highlight contributory negligence in your OPD or IPD notes. Start your notes with these details so that they become a part of the patient's permanent medical record. No documentation means no legal defense!`,
  },
  {
    number: 19,
    title: "RTI Act — Doctors Can Refuse to Give Patient Details to Third Parties",
    content: `With increasing awareness of the Right to Information (RTI) Act, the public — including journalists, family members, advocates, and third parties — are approaching hospitals and doctors, demanding access to patient medical records under RTI. However, medical professionals must be fully aware that they have the right to refuse such requests to protect patient privacy and uphold ethical medical practices.

Doctors must refuse to give patient details to third parties, quoting the following legal grounds in writing:

RTI Act, Section 8(1)(j): Personal information, including medical records, is exempt from disclosure unless a larger public interest justifies it.

Legal Precedents: The Central Information Commission (CIC) has ruled that medical records cannot be disclosed under RTI unless:
- The patient consents, or
- The information is required by law enforcement or a court order.

Doctors Must Be Vigilant: Despite these legal protections, doctors often face pressure from outsiders misusing RTI provisions. It is crucial that healthcare providers firmly decline such requests, citing legal grounds for refusal.`,
  },
  {
    number: 20,
    title: "Handling Document Requests in Medico-Legal Cases",
    content: `When a medico-legal case (MLC) is admitted to a hospital, the entire case sheet and related documents become legal property, and the attending doctor assumes the role of custodian. These records must be securely preserved and submitted to the investigating authority whenever officially requested.

Common Challenge Faced: Often, patient attenders or relatives insist on receiving copies of the full case sheet, certificates, or post-mortem reports. When the doctor refuses, they may start arguing.

Recommended Approach for Conflict Avoidance: In such situations, doctors should ask the attenders to obtain a No Objection Certificate (NOC) from the police station where the case is registered. This shifts the responsibility to the investigating officer.

This strategic approach has two key advantages:
- In most instances (over 99%), the police will not issue an NOC, and the attenders will not return.
- If the attenders do return with a valid NOC from the investigating officer, the doctor is legally protected and can safely issue the requested documents.

Medical Follow-Up vs. Legal Documents: Doctors should distinguish between documents necessary for ongoing medical care and those under legal scrutiny. Information such as provisional diagnosis and lab investigation reports, required for the patient's medical follow-up, can be routinely provided.

Final Note: A polite insistence on an NOC can effectively diffuse confrontations and safeguard healthcare professionals.`,
  },
  {
    number: 21,
    title: "Never Alter a Death Certificate to Help the Family",
    content: `A patient was brought to the hospital with acute chest pain. An ECG was performed which was said to be normal, but while leaving the hospital premises, the patient suddenly passed away. The exact medical cause of death remained unknown.

However, the patient had life insurance covering accidental death. Out of goodwill, the attending doctors issued a death certificate stating that the patient had died due to an accidental fall from the hospital staircase — intended to help the dependents claim insurance money.

The Investigation:
- The insurance company conducted its own independent inquiry before approving the claim.
- It was found that there was no definitive proof of an accidental fall, and no post-mortem was performed to confirm the cause of sudden death.
- Since no medico-legal case (MLC) was registered — a necessary step if an accident is involved — the insurance company rejected the claim.
- A formal complaint was lodged against the doctors before the Medical Council for issuing a misleading death certificate.

Consequences: Following an inquiry, the Medical Council found the doctor negligent in issuing a false death certificate. As a result, the doctor's name was erased from the medical register for 365 days — effectively suspending their practice.

Medicolegal Takeaway for Doctors:
1. Do Not Alter Medical Diagnoses to assist patients or their families financially.
2. Follow Standard Medico-Legal Protocols — document accurately and truthfully.
3. Insurance Companies Conduct Thorough Investigations before approving claims, using forensic methods and medical evidence.
4. Unwarranted Deviations Can Lead to Serious Consequences for doctors, including legal troubles and professional suspension.`,
  },
  {
    number: 22,
    title: "Blank Signatures Are Legal Landmines",
    content: `A Risky Routine: In many hospitals, it is common for doctors to obtain patient signatures on blank sheets during admissions, pre-procedure briefings, or high-risk counselling. These blanks often remain unfilled, eventually slipping into the medical records department unnoticed.

Legal Repercussions Are Real:
- Courtroom Consequences: If a dispute reaches court and a signed blank paper is found, it casts doubt on the doctor's intentions — potentially implying fraud. Judges may hold the doctor liable.
- Photographic Proof: Patient families sometimes photograph these blank-signed documents, turning them into damaging evidence later.

Real-World Fallout: In a recent ruling, a hospital was fined ₹1,00,000 — not for clinical negligence, but simply for having a signature on a blank sheet.

Best Practices to Avoid Legal Mishaps:
1. Write Before You Sign: Include all necessary procedure details and counseling notes before the patient signs.
2. Add a Counter-Signature: The staff member obtaining the consent should sign alongside to authenticate the process.
3. Audit Case Sheets at Discharge: Before finalizing a discharge, ensure no blanks remain in the documentation.
4. Verify Consent Form Completion: Prior to sending documents to the records department, double-check that all consents are properly and completely filled.

Signing blank documents can be construed as fraudulent behavior. Doctors must adopt meticulous documentation habits to uphold legal compliance and ensure ethical patient care.`,
  },
  {
    number: 23,
    title: "Importance of Signature on Consent Form",
    content: `Consent forms are foundational legal documents in medical practice. A signature on a consent form is not merely a formality — it is a legal record confirming that the patient or their representative was informed and agreed to the procedure.

Key Points:
- An unsigned consent form is equivalent to no consent at all in a court of law.
- The patient's signature must be obtained before any elective procedure, not after.
- The witness signature is equally important — always have a third party witness the signing of consent forms.
- Consent taken under coercion, duress, or when the patient is under the influence of drugs/sedatives is not legally valid.
- For critically ill patients who cannot sign, use a thumb impression in the presence of witnesses and document why a signature could not be obtained.

Documentation Tips:
- Record the time and date of consent signing.
- Note who explained the procedure and to whom.
- Ensure the consent form is legible, complete, and includes the nature of the procedure, risks, alternatives, and expected outcomes.
- Keep the original consent form in the patient's case file and provide a copy to the patient if requested.`,
  },
  {
    number: 24,
    title: "Therapeutic Privilege — When Relatives Say 'Don't Tell the Patient'",
    content: `It happens often. You're at the bedside, reviewing reports, when a worried family member pulls you aside and whispers: "Doctor, please don't tell him the diagnosis. He won't be able to handle it."

As doctors, we understand their fear. But are we allowed to hide the truth from the patient just because the relatives ask?

The Legal Rule: Doctors are legally and ethically required to inform adult patients about their diagnosis, prognosis, and treatment options. This is the foundational principle of "informed consent." The patient has the right to know their own medical condition.

Therapeutic Privilege: The concept of "therapeutic privilege" allows a doctor to withhold certain information ONLY if disclosing it would cause serious harm to the patient's health — not merely cause distress or emotional upset. This is a very narrow exception and must be used with extreme caution.

Important Distinctions:
- If the patient is unconscious or lacks decision-making capacity, relatives can be informed and decisions made in the patient's best interest.
- If the patient is a competent adult, their right to know their diagnosis supersedes the wishes of the relatives.
- Relatives have no legal right to prevent a doctor from informing a competent adult patient about their condition.

Practical Advice:
- Speak with the patient privately, separate from relatives, if needed.
- Document in the case sheet that the patient was informed of their diagnosis and their response.
- If a patient explicitly states they do not want to know their diagnosis, respect and document that choice — this is different from relatives asking you not to tell.`,
  },
  {
    number: 25,
    title: "Right to Die — The Legal Position in India",
    content: `In India, the question of the right to die has been addressed through landmark Supreme Court judgments.

Common Euthanasia (Active Euthanasia) — Actively ending a patient's life — remains illegal in India. No patient, family member, or doctor can legally authorize active euthanasia.

However, the Supreme Court of India, in Aruna Shanbaug vs. Union of India (2011) and Common Cause vs. Union of India (2018), has recognized:

1. Passive Euthanasia: Withdrawal of life support under certain conditions is permitted, but only with court approval.

2. Advance Directives (Living Will): Patients can prepare a "Living Will" stating they do not wish to be kept on artificial life support in terminal stages. This was legally recognized by the Supreme Court in 2018.

What This Means for Doctors:
- Do not withdraw life support or withhold treatment without proper legal authorization.
- If a patient or family requests withdrawal of life support, follow the legal process — consult with a medical board and obtain High Court permission.
- Document all discussions about prognosis and end-of-life care meticulously.
- Do not succumb to emotional pressure from families to "let go" without following due legal procedure.

Practical Risk: Doctors who withdraw treatment without following the prescribed legal process can face criminal charges, including culpable homicide.`,
  },
  {
    number: 26,
    title: "AYUSH Doctors Practicing Allopathy — A Legal Problem",
    content: `AYUSH doctors (Ayurveda, Yoga, Unani, Siddha, Homeopathy) practicing allopathic medicine or prescribing allopathic drugs is a significant legal issue.

Legal Position: AYUSH practitioners are not permitted to practice allopathic medicine. They are trained in their respective streams and are bound by the scope of their practice as defined by their respective regulatory bodies.

Risks for AYUSH Doctors:
- Prescribing allopathic drugs without being qualified can lead to criminal prosecution.
- If a patient suffers harm as a result, the AYUSH doctor can be charged with practicing without a license and medical negligence.
- AYUSH practitioners cannot legally perform surgeries, administer anesthesia, or prescribe Schedule H drugs meant exclusively for allopathic practitioners.

Risks for Allopathic Hospitals Employing AYUSH Doctors: If a hospital knowingly employs an AYUSH doctor to perform allopathic duties and a patient is harmed, both the hospital and the doctor face serious legal liability.

How to Handle Sudden Deaths in Hospitals: Every hospital must have a clear Standard Operating Procedure (SOP) for handling sudden deaths:
1. Do not move the body without informing the police first.
2. Register the case as an MLC immediately.
3. Request a post-mortem examination to determine the cause of death.
4. Document all events accurately in the case sheet.
5. Preserve the deceased's belongings as evidence.
6. Inform the police before informing the media.`,
  },
  {
    number: 27,
    title: "'Not Valid for Legal Purpose' Offers Zero Legal Protection",
    content: `Writing "Not Valid for Legal Purpose" is the most useless thing a doctor can do.

A new trend has started — doctors are writing "Not valid for legal purpose" on certificates, radiology reports, even blood reports, thinking this one line will protect them.

Real Case: Recently, a patient used such a certificate to avoid appearing in court. When questioned, the doctor said, "But I wrote not valid for legal purpose!" The court rejected this completely.

Legal Reality: Under the Indian Evidence Act, any document signed by a registered medical practitioner is automatically a legal document. Your disclaimer has zero legal value.

Consequence: If the information is inaccurate or fake, you are liable, regardless of what you wrote at the bottom.

Legal Truth: A disclaimer cannot override the law.

Core Message:
- Don't rely on a false safety sentence.
- Disclaimers don't protect you — accuracy, proper examination, and correct documentation do.
- Stop practicing with myths; start practicing with the law.

What You Should Do Instead:
- Only issue certificates after personally examining the patient.
- Ensure all information in the certificate is accurate.
- Specify the purpose of the certificate clearly.
- Document your examination findings in the case file.`,
  },
  {
    number: 28,
    title: "Doctor on Leave and Patient in the Nursing Home",
    content: `A very common scenario in smaller nursing homes and clinics is a patient being admitted under one doctor who then goes on leave, and another doctor or a junior handles the patient in their absence.

Legal Issues This Creates:
1. The admitting doctor remains the treating doctor of record and is legally responsible for the patient's care, even during their absence.
2. If a locum or on-call doctor provides care without proper handover, both doctors can be held liable if complications arise.
3. A casual handover without proper documentation is one of the most common causes of medical litigation.

Best Practices for Doctor on Leave:
1. Formal Written Handover: Ensure a detailed written handover note is made in the case file when handing over a patient to another doctor.
2. Inform the Patient and Relatives: Document that the patient and their family were informed about the change in treating doctor during the period of leave.
3. Designate a Responsible Doctor: Formally designate a specific senior doctor to be responsible for the patient — not just "the on-call doctor."
4. Remote Monitoring: Where possible, maintain telephonic or digital consultation with the patient's new treating doctor during critical phases.
5. Clear Instruction Sheet: Leave a clear, detailed instruction sheet for the on-call doctor regarding the patient's management.`,
  },
  {
    number: 29,
    title: "Importance of Follow-Up Dates in Discharge Summaries",
    content: `The Issue: Many patients require follow-up for serious conditions such as retinopathy of prematurity, tapering steroids, or follow-up imaging. Often, they fail to return on time and later present with complications at an advanced stage. When outcomes are poor, families frequently blame doctors for medical negligence.

Legal Risk: There are several cases where patients continued prolonged medications like Wysolone or Methotrexate without follow-up, leading to serious adverse events. While doctors usually explain follow-up verbally, the legal mistake is not writing the follow-up date in the discharge summary. In consumer court, patients often claim they were not informed and argue that no counselling was done. Without documentation, doctors have no proof that the patient was advised to return for follow-up.

The Legal Protection: What protects doctors in such cases is written documentation of the follow-up date in the discharge summary. This serves as proof that the patient was advised properly and shifts responsibility back to the patient if they fail to comply.

Decided Judgments:
- In one case, an ophthalmologist was not held negligent even though the patient lost complete vision following prolonged topical steroid use, because documentation of follow-up after 7 days was recorded in the discharge summary.
- In contrast, a paediatrician was held negligent and ordered to pay ₹76 lakh compensation because of failure to write proper retinopathy of prematurity follow-up dates and advice in the discharge summary, which led to blindness.

Message to Doctors: Always take time to write discharge summaries carefully. A discharge summary is not just a medical note — it is a legal document that can safeguard you in court. Specifically mention the follow-up dates in the discharge summary. Remember, your oral counselling to come back will not stand in court if you have not documented it in the case sheet.`,
  },
  {
    number: 30,
    title: "Doctor Criticizing Doctor on Social Media — A Legal Risk",
    content: `The Issue: In today's digital age, doctors increasingly use social media to share knowledge, highlight challenges, and showcase life-saving efforts. Unfortunately, a disturbing trend has emerged: fellow doctors publicly criticizing and alleging negligence in comment sections, without knowing the full clinical context. Even the Supreme Court has said that detailed analysis must be made before coming to a conclusion.

Legal Risk:
- Public comments can instigate patients or attendants to file complaints or legal cases.
- Remarks such as "RIP protocol," "hospital should be shut down," or "Protocols are not followed" may be interpreted as evidence of negligence, especially when made by doctors.
- Once such cycles of blame begin, any doctor can become the next target.

Legal Protection:
- Constructive critique should remain within professional forums, peer review committees, institutional audits, or even personal messages directly.
- Avoid judgmental remarks in public comment threads.
- Do not pass loose comments about colleagues on social media without knowing the reality.
- Protect colleagues today to safeguard yourself tomorrow.
- Remember: casual or speculative comments have no evidentiary value but can still trigger unnecessary litigation.

Message to Doctors: Doctors must restrain from public jousting on social media. Let us maintain unity, uphold dignity, and safeguard the profession from avoidable medico-legal risks.`,
  },
  {
    number: 31,
    title: "A Non-MLC Case Can Later Be Converted to an MLC",
    content: `The Issue: Patients may be admitted as non-MLC cases (e.g., accidental falls, unconscious states). Later, when they regain consciousness or disclose new facts, they may reveal a history of assault or suspected crime.

Legal Risk: Failure to convert such cases into MLCs can expose doctors to allegations of suppression, negligence, or complicity.

Legal Protection: The law permits late MLC intimation. As soon as suspicion of crime arises, even after several days, doctors are legally bound to inform the police.

Example Case: A female patient is admitted with a fracture, initially reported as a self-fall at home. After two days, she discloses that domestic violence occurred. In such a situation, the doctor must make the MLC on the day she disclosed the violence, not retrospectively. The intimation should carry the actual date and time when the disclosure was made.

Message to Doctors: Do not fear late MLCs. They are legally valid. The safeguard is clear documentation:
- Record the actual date and time when suspicion arose.
- Note in the case sheet that the MLC was made late because initially it was not considered an MLC.
- Never alter dates or issue retrospective intimation.`,
  },
  {
    number: 32,
    title: "BNS Is Stricter Than IPC for Doctors",
    content: `Is the Bharatiya Nyaya Sanhita (BNS) more doctor-friendly than the Indian Penal Code (IPC) in terms of protecting medical professionals from criminal prosecution?

Under IPC 304A: Medical negligence was treated as general negligence. There was no clear definition, no clarity on which registered practitioners were covered, and courts had full flexibility to give only a fine, or a fine plus imprisonment. This made IPC less harsh and far more forgiving for doctors.

Under BNS Section 106, things have changed:
- Medical negligence is clearly defined.
- Registered practitioners are specifically identified.
- Imprisonment of 2 years is mandatory if negligence is proven.

Message to Doctors: BNS has clearly become tougher on doctors. Laws are getting stricter year after year. There is no shortcut anymore — only strong medico-legal knowledge and disciplined practice can protect you.`,
  },
  {
    number: 33,
    title: "Allopathic Doctors Must Not Prescribe Ayurvedic Medicines",
    content: `The Issue: An allopathic doctor in Delhi was recently penalized in consumer court for prescribing an Ayurvedic medicine (Liv 52) to a patient admitted with suspected dengue fever. The patient later died, and during case sheet review, it was found that the doctor had prescribed an Ayurvedic hepatoprotector despite not being qualified in Ayurveda.

Legal Risk: The consumer court held this to be medical negligence, stating that an allopathic doctor is not legally permitted to prescribe Ayurvedic drugs. Compensation was ordered.

This case reinforces a critical medico-legal principle: cross-pathy is prohibited.

Legal Protection:
- Allopathic doctors are legally allowed to practice only modern medicine and surgery.
- Prescribing Ayurvedic, Homeopathic, Siddha, Unani, or any alternative medicine without qualification is prohibited under NMC rules.
- We have no formal training in their mechanism, interactions, or adverse effects.
- If a complication occurs, courts will hold the doctor negligent for practicing outside their qualification.
- The argument that "other systems prescribe allopathic drugs" has no legal value. One wrong does not legalize another wrong.

Message to Doctors: Mixing medical systems may feel harmless, but legally it is negligence. Always practice strictly within your qualification and avoid prescribing any medicine outside the modern system of medicine.`,
  },
  {
    number: 34,
    title: "Belongings of a Patient in a Medico-Legal Case",
    content: `The Issue: In medico-legal cases, doctors naturally focus on treatment — but the patient's belongings often hold crucial evidence that can influence the entire investigation.

Legal Risk: If clothes, documents, or personal items are misplaced, thrown away, or not handed over properly, it can break the chain of custody and lead to allegations of negligence or evidence tampering against the hospital or doctor.

Legal Protection:
- Always collect all belongings — clothes, paper slips, objects found in pockets, or any material present on the patient's body.
- Place them in a sealed box or bag, label it with the patient's name and hospital ID.
- Document it clearly in the MLC register.
- Hand it over to the investigating officer with a proper acknowledgment.

Message to Doctors: When an MLC patient arrives — whether due to a stab injury, assault, or suspected homicide — treat every belonging as potential evidence. Clothes with blood stains, papers, or personal items must be preserved exactly as received.

Follow a systematic, documented process for preserving and handing over belongings. These small steps protect you and help deliver justice to an innocent victim.`,
  },
  {
    number: 35,
    title: "Visiting and Freelancing Doctors — Legal Responsibilities",
    content: `Visiting or freelancing doctors who consult at multiple hospitals face unique medico-legal challenges.

Legal Issues for Visiting Doctors:
1. Vicarious Liability: The hospital can be held vicariously liable for the actions of visiting doctors. However, visiting doctors themselves are also personally liable for their own negligence.
2. Documentation Responsibility: Visiting doctors must maintain proper documentation of their consultations. A casual verbal instruction without written documentation offers no legal protection.
3. Emergency Situations: If an emergency arises and the visiting doctor is not available, clear protocols must be in place for who is responsible.

Contractual Obligations:
- Always have a clear written agreement with the hospital specifying the nature of your engagement, responsibilities, working hours, and indemnity coverage.
- Ensure your professional indemnity insurance covers your work at all hospitals where you consult.

Best Practices:
1. Always write dated, timed notes for every patient you see.
2. Clearly communicate handover instructions to resident doctors when you leave.
3. Ensure the hospital has your contact information and emergency availability protocol documented.
4. Check that your indemnity insurance specifically covers freelance/visiting work.
5. Never allow your name to appear on documents for patients you have not personally seen.`,
  },
  {
    number: 36,
    title: "Refusal of Examination and Section 51 BNSS",
    content: `A doctor's right to refuse examination of a patient is limited, and understanding the legal framework is crucial.

Section 51 of the Bharatiya Nagarik Suraksha Sanhita (BNSS): This section deals with the examination of an accused person. Doctors may be called upon by police to examine suspects in criminal cases. The law requires doctors to conduct these examinations when directed by a police officer.

Key Points for Doctors:
1. When police request a medical examination of a suspect or accused, the doctor is legally obligated to conduct the examination.
2. Refusing without valid grounds can be considered obstruction of justice.
3. The doctor must conduct the examination professionally and document findings accurately.
4. The medical examination report is an important piece of evidence and must be prepared meticulously.

When Can a Doctor Legitimately Decline?
- If the examination would require the doctor to perform an unethical or illegal act.
- If the doctor has a genuine conflict of interest.
- If the patient's life is in immediate danger and examination would harm them.

Documentation Requirements:
- Record the date, time, name, and designation of the police officer making the request.
- Document all findings objectively without bias.
- Prepare the report in clear, legible language.
- Maintain confidentiality as per medical ethics while fulfilling legal obligations.`,
  },
  {
    number: 37,
    title: "Re-Exploration Surgery — Consent and Legal Implications",
    content: `Re-exploration surgery refers to a second surgery performed on a patient who has already undergone a primary surgical procedure, usually due to complications, incomplete first surgery, or post-operative deterioration.

Key Medico-Legal Issues:

1. Fresh Consent Is Mandatory: Even if the patient consented to the primary surgery, fresh informed consent must be taken before re-exploration. The risks of the second surgery may be different from the first, and these must be explained separately.

2. Documentation of Reasons: Clearly document why re-exploration is required. The reasons must be medical — for example, post-operative bleeding, anastomotic leak, retained foreign body, or sepsis. Vague documentation can lead to allegations of negligence for the first surgery.

3. Retained Foreign Bodies: If re-exploration reveals a retained surgical instrument or sponge from the first surgery, this is considered res ipsa loquitur (the thing speaks for itself) — a clear case of negligence. Always do a proper count of instruments and sponges before closing.

4. Timing Documentation: Document the exact time the decision for re-exploration was made and the time the surgery was performed. Any unexplained delay between decision and surgery can be questioned.

5. Family Communication: Inform the patient's family about the re-exploration, its reasons, and expected outcomes. Document this communication in the case file.

Best Practice: If a post-operative patient's condition deteriorates, do not delay decision-making for re-exploration to avoid "admitting" the first surgery had problems. Early re-exploration with good documentation is far safer legally than delayed action.`,
  },
  {
    number: 38,
    title: "Posting Patient Videos in Reels — Always Take Written Consent",
    content: `The Issue: In today's digital era, many doctors post reels to showcase their achievements and treatment results. But many of these videos unintentionally reveal the identity of patients.

Example: Many reels today show emotional moments after an IVF delivery — the mother crying with joy, the couple thanking the team, or the doctor announcing the successful birth. In that moment of excitement, the parents may happily say "Yes, doctor, you can record this." But later, when the excitement settles, they may feel uncomfortable that such a private and sensitive part of their IVF journey has been shared publicly. They may then file a complaint saying their privacy was breached.

Legal Risk: The Medical Council guidelines are clear: If a patient's identity is revealed in any form, written consent is mandatory.

Legal Protection:
- Take written consent before recording or posting any reel involving a patient.
- If the patient's identity is visible, written consent is compulsory.
- If the patient's identity is fully hidden, consent is not required.

Always take written consent before involving patients in reels or videos, even if they appear comfortable at that moment. Patient privacy is non-negotiable. Written consent is your legal shield.`,
  },
  {
    number: 39,
    title: "Never Issue a Medical Certificate Without Examining the Patient",
    content: `The Issue: Some doctors issue medical certificates based on phone calls or attendants' requests — but this is a serious medico-legal violation that can lead to disciplinary action.

Legal Risk: In one real case, a doctor issued a certificate purely on an oral request from the patient's attendants. Later, it was discovered that the patient was actually partying in the USA on the exact dates mentioned in the certificate. Because of certain reasons, the validity of the certificate came into question, and the case was referred to the Delhi Medical Council for inquiry which held the doctor guilty of issuing a certificate without examination and suspended his registration for two months.

Certificates issued without examination can be misused for insurance, employment, leave, or legal matters — and the doctor becomes fully liable.

Legal Protection: A medical certificate is a legal document. You must personally examine the patient before issuing it. If challenged, failure to examine is treated as negligence or professional misconduct. Never issue a certificate unless you have examined the patient yourself.`,
  },
  {
    number: 40,
    title: "Take a Request Letter Before Issuing Any Medical Document",
    content: `The Issue: Doctors often issue certificates, discharge summaries, or medical records based on oral requests from patients, relatives, police, or other authorities. The common mistake is not taking a written request letter.

Legal Risk: If a document is issued without a written request, the patient may later claim that their medical information was released without consent. Medical councils and courts take such privacy breaches seriously and may hold the doctor responsible.

Legal Protection:
- Take a written request letter for every medical document you issue.
- If the patient is requesting, their signature serves as consent.
- If a third party is requesting, ensure the patient also signs the request letter.
- Never issue any medical document based only on an oral request.

Decided Judgments: Courts have repeatedly held that releasing medical information without documented consent amounts to breach of confidentiality and professional misconduct.

A simple written request letter protects you legally and ensures patient privacy is respected.`,
  },
  {
    number: 41,
    title: "Doctors Can Question the Opinion of an Expert Committee",
    content: `The Issue: When a complaint of medical negligence is made, courts or authorities often form an expert committee to review the case. Many doctors believe that once the committee gives its opinion, it cannot be questioned. Legally, this is incorrect.

Legal Risk: If the committee does not include a specialist from the concerned field, its opinion may be considered incomplete or unreliable. For example, if the allegation is in Paediatrics, at least one paediatrician must be part of the committee. Law clearly states that negligence must be judged by peer doctors from the same specialty.

Legal Protection: Doctors have the right to challenge the validity of an expert committee if:
- It does not include a specialist from the relevant field.
- The members lack the required expertise to judge the case.

This ensures that the medical facts are properly understood and fairly evaluated.

Whenever a case is filed against you, request that at least one member of the expert committee belongs to your specialty. This protects you and ensures a fair, scientifically sound assessment.

Message to Doctors: You can question an expert committee if it lacks the right specialists. Fair evaluation is your right.`,
  },
  {
    number: 42,
    title: "The 6 Crore Lesson — Never Exceed Prescribed Drug Dosage",
    content: `The Issue: ₹6,00,00,000 compensation. This was the compensation awarded in the famous Kunal Saha case.

Legal Risk: Do you know the key reason negligence was established? It was excessive administration of drug — beyond the recommended dosage limits in medical literature.

Reality Check: As doctors, we often adjust doses of drugs, especially those with linear dose-response, based on our experience, clinical judgment, and patient response because individual patients respond differently to different dosages. With the intention to benefit the patient.

But the law does NOT accept personal experience as evidence.

Warning: If you cross the dosage limits written in textbooks or guidelines without any evidence of literature supporting your action, it can be treated as medical negligence — even if your intention was to help.

Decided Judgment: The Kunal Saha case stands as a reminder that deviation from recommended doses without literature support can attract massive liability.

Legal Protection: Strictly adhere to recommended doses. Your individual experience cannot defend you in court. Only textbook literature or guidelines can save you, so be careful when you deviate from standard dosages.`,
  },
  {
    number: 43,
    title: "'Not Valid for Legal Purpose' Is the Most Useless Thing a Doctor Can Write",
    content: `The Issue: Writing "Not Valid for Legal Purpose" is the most useless thing a doctor can do. A new trend has started — doctors are writing "Not valid for legal purpose" on certificates, radiology reports, even blood reports, thinking this one line will protect them.

Recently, a patient used such a certificate to avoid appearing in court. When questioned, the doctor said, "But I wrote not valid for legal purpose!" The court rejected this completely.

Legal Risk: Under the Indian Evidence Act, any document signed by a registered medical practitioner is automatically a legal document. Your disclaimer has zero legal value.

Consequence: If the information is inaccurate or fake, you are liable, regardless of what you wrote at the bottom.

Legal Truth: A disclaimer cannot override the law.

Core Message:
- Don't rely on a false safety sentence.
- Disclaimers don't protect you — accuracy, proper examination, and correct documentation do.
- Stop practicing with myths; start practicing with the law.`,
  },
  {
    number: 44,
    title: "A Surgeon Cannot Take Consent for Anaesthesia",
    content: `The Issue: In many hospitals, surgeons take anaesthesia consent because anaesthetists arrive only at the time of surgery. But legally, this is a problem. Consent requires explaining the procedure, risks, and alternatives — and only an anaesthetist is qualified to explain anaesthesia-related risks.

Legal Risk: If a surgeon takes anaesthesia consent, courts may consider it as invalid, because the surgeon is not the expert in anaesthesia. This can lead to allegations of improper consent, negligence, or failure to disclose risks.

Legal Protection:
- Anaesthesia consent must be taken only by the anaesthetist.
- It should be countersigned by the anaesthesiologist who is giving the anaesthesia.
- Surgeons should avoid taking anaesthesia consent, as they cannot explain anaesthesia-specific risks and alternatives.

Decided Judgments: Courts have repeatedly held that consent must be taken by the doctor who is performing the procedure or administering the intervention — including anaesthesia.

Anaesthesia consent is the legal responsibility of the anaesthetist, not the surgeon.`,
  },
  {
    number: 45,
    title: "What to Check Before Buying Professional Indemnity Insurance",
    content: `Check 1 — The AOA:AOY Ratio: This decides how much you ACTUALLY get. Your policy may say 1 Crore, but if the AOA:AOY ratio is 1:2, the company will pay only 50 Lakhs for a single claim. If the court awards 80 Lakhs, you will pay the remaining 40 Lakhs from your own pocket. Most doctors don't even know this ratio exists — but this is the clause that destroys them financially.

Check 2 — Check if Vicarious Liability is Covered: Many policies cover only the doctor. But in real life, you will be sued even if the mistake is done by a nurse, technician, or junior, because of the legal principle of Vicarious Liability. If your policy doesn't cover vicarious liability, you are standing naked in the courtroom.

Check 3 — Check if Legal Defense Costs Are Included: Hiring a good medico-legal advocate today can cost more than the compensation claim itself. If your policy doesn't cover legal defense, you will burn lakhs before the case even starts.

Final Message: Indemnity insurance is your last line of defense. Your first line of defense is preventing cases by learning the law. Attend medico-legal masterclasses specially designed for doctors. Visit WWW.MEDICOLEGALAID.COM to register and learn the legal issues concerned with medical practice that can save your career.`,
  },
  {
    number: 46,
    title: "What Doctors MUST Do When a Consumer Case Is Filed",
    content: `Step 1 — Inform Your Indemnity Insurance Immediately:
- The moment you receive a legal notice, inform your Professional Indemnity Insurance company.
- Delay in intimation is one of the biggest reasons for claim rejection.

Step 2 — Never Pay the Patient in Cash:
- Even on humanitarian grounds, never pay in cash.
- Cash has no proof, no evidence, and no legal value.
- If you ever help, do it only by cheque or online, so the record protects you.

Step 3 — Respond to the Notice Within Time:
- Consumer courts can pass ex parte orders.
- If you don't appear or don't respond, the case will continue without you — and the final judgment will be delivered without hearing your side.
- Always respond within the stipulated time.`,
  },
  {
    number: 47,
    title: "When an Unconscious Patient Has No Attenders",
    content: `The Issue: A patient is unconscious, requires an urgent life-saving procedure, and either no attenders are available, or attenders admit the patient and then abscond.

Legal Risk: If a single doctor proceeds alone, later complications may lead to allegations of:
- Performing a procedure without consent
- Acting without due diligence
- Causing harm without proper authorization
- Not attempting to contact relatives

Legal Protection: In emergencies, the law recognizes implied consent, but courts expect collective, documented decision-making. Recommended steps:

1. Convene a medical board of at least two doctors (a senior doctor and a resident or colleague) before performing any major procedure.
2. Document in the case sheet: "Patient is unconscious, no attenders are available. Emergency procedure required. Decision taken jointly with [Doctor's name and designation]. Relatives were not contactable as patient arrived alone."
3. Make all attempts to contact relatives — try calling any phone numbers found on the patient, contact police, check the patient's ID, etc. Document all attempts.
4. Register the case as an MLC (unknown unconscious patient).
5. Inform the police and request their assistance in identifying the patient and tracing relatives.

Message to Doctors: The law protects you when you act in good faith in a genuine emergency, provided you document the situation thoroughly and act collectively, not alone.`,
  },
  {
    number: 48,
    title: "Can Doctors Video-Record the Consent or Counselling Process?",
    content: `Yes, doctors can video-record the consent or counselling process, but with important conditions.

Why Doctors Want to Record: Video recording of consent or counselling is increasingly being used by doctors as evidence to prove that the patient was fully informed, that the procedure and risks were explained, and that the patient voluntarily agreed.

Legal Position: There is no specific law in India that prohibits doctors from video-recording the consent process. However, the patient's consent for the recording itself is mandatory. You cannot record a patient without their knowledge and consent.

Best Practices:
1. Inform the patient that you intend to record the counselling session and obtain their written consent for the recording.
2. State the purpose of recording — for example, "for medical record purposes and legal protection."
3. Ensure the recording clearly captures the patient's verbal and written consent for the procedure itself.
4. Store the recordings securely with restricted access, as they contain sensitive patient information.
5. Do not share or upload the recording on social media or any public platform.

Benefits of Video-Recording Consent:
- Reduces "he said, she said" disputes in court.
- Provides clear evidence that the patient was informed in their own language.
- Demonstrates the professional conduct of the doctor during counselling.

Caution: A video recording does not replace a written consent form. Both should be used together.`,
  },
  {
    number: 49,
    title: "Known Surgical Complications Are Not Negligence",
    content: `One of the most important and misunderstood principles in medico-legal practice: A known complication of a surgery or procedure, when it occurs despite proper care, is NOT medical negligence.

The Legal Standard: Courts in India follow the Bolam test — a doctor is not negligent if they acted in accordance with a practice accepted as proper by a responsible body of medical professionals. If a complication is a recognized risk of a procedure, and the patient was informed of this risk during consent, and the doctor managed it appropriately — this is not negligence.

Examples of Known Complications That Are Not Negligence:
- Anastomotic leak after bowel surgery
- Wound infection after surgery
- Nerve damage during thyroid surgery (recurrent laryngeal nerve injury)
- Deep vein thrombosis after major surgery
- Stroke after cardiac surgery

What Converts a Complication into Negligence:
1. Failure to inform the patient about the risk before surgery (inadequate consent)
2. Failure to recognize or act promptly when the complication occurs
3. Deviation from standard protocols in managing the complication
4. Delay in seeking specialist help when required

Key Advice: Document in the consent form ALL known complications of the planned procedure, specifically and in understandable language. When a complication occurs, document your timely recognition and management in detail. This documentation is your best legal defense.`,
  },
  {
    number: 50,
    title: "Hospitals Are Vicariously Liable for Their Staff",
    content: `An important legal principle: Hospitals and nursing homes can be held vicariously liable for the acts and omissions of their staff — including doctors, nurses, technicians, and other healthcare workers.

What Is Vicarious Liability? Vicarious liability means that an employer (the hospital) can be held legally responsible for the negligent acts of their employees committed during the course of their employment.

Recent Court Rulings: Courts in India have consistently supported the principle that hospitals cannot escape liability by claiming a doctor was an "independent contractor" rather than an employee, especially when:
- The hospital controls the working environment.
- The hospital presents the doctor as part of their medical team.
- The patient chose the hospital, not the specific doctor.

Implications for Hospitals:
- A hospital cannot disclaim responsibility by pointing only to the individual doctor.
- Both the hospital AND the doctor can be co-defendants in a case.
- The hospital is responsible for ensuring adequate training, supervision, and resources for all staff.

Implications for Doctors:
- Your professional conduct reflects on your institution.
- Ensure you practice within your qualification and competence at all times.
- Ensure your hospital has adequate indemnity insurance that covers all staff, including visiting doctors.
- Even as an independent consultant, if you work within a hospital setup, you may be co-held with the hospital.`,
  },
  {
    number: 51,
    title: "Financial Assumptions Can Destroy Your Career",
    content: `Medico-Legal Tip: A real scenario that has destroyed many medical careers involves doctors making assumptions about a patient's financial capacity and making treatment decisions based on those assumptions without documenting the patient's or family's informed choice.

Common Scenarios:
1. A doctor decides not to order an expensive investigation, assuming the patient cannot afford it, but does not document this discussion.
2. A doctor chooses a cheaper treatment option without explaining the superior but costly option, and the patient suffers a worse outcome.
3. A doctor discharges a patient prematurely due to assumed financial pressure, without proper documentation.

Why This Destroys Careers:
- The patient and family always deny that financial reasons were discussed.
- Without documentation, the court assumes the doctor made substandard decisions without informing the patient.
- The doctor is then found negligent for offering inferior care.

The Right Approach:
1. Always present the BEST medical option first, regardless of cost.
2. Explain costs clearly and give the patient/family the opportunity to choose.
3. Document the discussion: "Patient informed of Option A (cost X) and Option B (cost Y). Patient/family chose Option B due to financial considerations."
4. Get the patient's or family's signature acknowledging their informed choice.
5. Never make financial decisions on behalf of the patient without documenting their explicit agreement.`,
  },
  {
    number: 52,
    title: "Documentation Check Before Handing Over a Case Sheet",
    content: `Before a case sheet is handed over at the time of discharge, transfer, or death — doctors must perform a comprehensive documentation audit. This is a critical step that most doctors skip, leading to significant legal vulnerabilities.

Checklist Before Handing Over a Case Sheet:

1. Consent Forms: Are all consent forms present, signed, dated, and complete? No blanks? Countersigned?
2. Admission Notes: Do admission notes accurately reflect the patient's condition at the time of arrival?
3. Daily Progress Notes: Are daily notes present for every day of admission? Are they dated and timed?
4. Investigation Reports: Are all investigation reports pasted and referenced in the case notes?
5. Discharge Summary: Is the discharge summary complete with diagnosis, treatment given, follow-up advice, and next review date?
6. MLC Documentation: If it was an MLC case, are all required MLC documents complete?
7. Drug Charts: Are drug charts complete with correct dosages, routes, and timing?
8. Allergy Records: Is the allergy history documented?
9. Referral Notes: If the patient was referred, is the referral letter in the file?
10. Death Documentation: In case of death — is the cause of death clearly documented? Is the death certificate correctly filled?

Why This Matters: A case sheet is not just a medical record — it is your legal defense document. Gaps, missing entries, or incomplete forms become the basis of negligence claims.`,
  },
  {
    number: 53,
    title: "Mandatory Consents Before Any Major Surgery",
    content: `Before any major surgery, there are specific consent documents that are legally mandatory. Many medico-legal cases arise from failure to obtain these consents or from improperly obtained consents.

Mandatory Consents for Major Surgery:

1. Surgical Consent: Written, informed consent for the specific surgical procedure, explaining the diagnosis, proposed surgery, alternatives, expected outcomes, and risks/complications.

2. Anaesthesia Consent: Separate consent for anaesthesia, taken ONLY by the anaesthetist — not the surgeon.

3. Blood Transfusion Consent: If blood transfusion may be required during or after surgery, separate written consent must be obtained.

4. Implant Consent: If any implant (stent, prosthesis, mesh, nail, etc.) is to be used, specific consent for the implant must be obtained, including the type, brand, cost, and risks specific to that implant.

5. Photography/Video Consent: If the surgery is to be recorded for teaching, research, or documentation purposes, the patient must provide separate written consent.

6. ICU Admission Consent: For major surgeries requiring post-operative ICU admission, inform the patient and family in advance and document their agreement.

7. Consent for Additional Procedures: If there is a possibility of discovering and treating another condition during surgery, this must be discussed and documented. Do NOT rely on blanket consent.

The Golden Rule: One surgery = One specific consent. No blanket consents. No verbal-only consents. Every consent must be written, witnessed, dated, and timed.`,
  },
];

export default function TipsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return tips;
    return tips.filter(
      (tip) =>
        tip.title.toLowerCase().includes(q) ||
        tip.content.toLowerCase().includes(q) ||
        String(tip.number).includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="tips" />

      {/* Hero */}
      <section className="bg-primary py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Medico Legal Tips
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Practical medico-legal guidance to protect your career and practice.
          Browse all {tips.length} tips or search by keyword.
        </p>
      </section>

      {/* Search */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border/40 py-4 px-4">
        <div className="max-w-3xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tips by keyword, topic, or tip number…"
            className="w-full pl-12 pr-4 py-3 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-base"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm"
            >
              Clear
            </button>
          )}
        </div>
        {query && (
          <p className="text-center text-sm text-muted-foreground mt-2">
            {filtered.length === 0
              ? "No tips found."
              : `Showing ${filtered.length} of ${tips.length} tips`}
          </p>
        )}
      </div>

      {/* Tips List */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-xl font-medium">No tips found</p>
            <p className="text-sm mt-1">Try a different search term</p>
          </div>
        ) : (
          filtered.map((tip) => (
            <TipCard key={tip.number} tip={tip} query={query} />
          ))
        )}
      </div>

      <WhatsAppButton />
    </div>
  );
}

function TipCard({ tip, query }: { tip: Tip; query: string }) {
  const [expanded, setExpanded] = useState(false);

  const preview = tip.content.slice(0, 200).trimEnd();
  const isLong = tip.content.length > 200;

  function highlight(text: string, q: string) {
    if (!q.trim()) return text;
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-accent/40 text-foreground rounded-sm px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }

  return (
    <div className="border border-border rounded-sm bg-card shadow-sm overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-muted/40 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
          {tip.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-foreground leading-snug">
            {highlight(tip.title, query)}
          </h3>
          {!expanded && (
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
              {highlight(preview, query)}
              {isLong && !expanded ? "…" : ""}
            </p>
          )}
        </div>
        <span className="flex-shrink-0 text-muted-foreground text-xl leading-none select-none mt-1">
          {expanded ? "−" : "+"}
        </span>
      </button>

      {expanded && (
        <div className="px-6 pb-6 pt-0">
          <div className="border-t border-border/40 pt-4">
            <p className="text-sm text-foreground/90 whitespace-pre-line leading-relaxed">
              {highlight(tip.content, query)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
