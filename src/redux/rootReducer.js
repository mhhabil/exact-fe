// ** Reducers Imports
import InpatientInitialNursingEarlyWarning from '@src/modules/inpatient/nursing-early-warning-scoring-table/stores/nursing-early-warning-scoring.store';
import IntegratedEducationStore from '@src/modules/inpatient/integrated-education/stores/Integrated-education.store';
import anestheticStatus from '@modules/operating-room/anesthetic-status/stores/anesthetic-status.store';
import approvalOrRefusalOfAnestheticActionStore from '@src/modules/inpatient/inform-consent/stores/approval-or-refusal-of-anesthetic-action.store';
import assesmenPraOperasiStore from '@src/modules/operating-room/assesmen-pra-operasi/stores/assesmen-pra-operasi.store';
import assessmentUgdStore from '@modules/emergency-room/assessment/stores/assessment-ugd.store';
import assessmentVitalSigns from '@modules/inpatient/assessment-vital-signs/stores/assessment-vital-signs.store'
import auth from './authentication';
import bpjsValidate from '@shared/bpjs/stores/bpjs-validate.store';
import changePin from '@modules/account/change-pin/stores/change-pin.store'
import checklistPraOperasiStore from '@src/modules/outpatient/checklist-pra-operasi/stores/checklist-pra-operasi.store';
import consultationSheet from '@modules/outpatient/consultation-sheet/stores/consultation-sheet.store'
import cpptEmergencyRoomStore from '@src/modules/emergency-room/cppt/stores/cppt-emergency-room.store';
import cpptInpatient from '@modules/inpatient/cppt/stores/cppt-inpatient.store';
import cpptNutrition from '@modules/nutrition/cppt/stores/cppt-nutrition.store';
import cpptOk from '@src/modules/operating-room/cppt/stores/cppt-ok.store';
import cpptOutPatient from '@src/modules/outpatient/cppt/stores/cppt-out-patient.store';
import cpptPharmacyStore from '@src/modules/pharmacy/cppt/stores/cppt-pharmacy.store';
import cpptRo from '@modules/ro/cppt/stores/cppt-ro.store';
import dailyEducation from '@modules/general/daily-education/stores/daily-education.store';
import dicom from '@src/modules/diagnostic/tool-inspection-result/stores/tool-inspection-result.store';
import dischargePlanningStore from '@src/modules/inpatient/discharge-planning/stores/discharge-planning.store';
import doctor from '@shared/doctor/stores/doctor.store';
import doctorPreliminaryStudy from '@src/modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import documentationOfFallRiskPatientStore from '@src/modules/inpatient/documentation-of-fall-risk-patient/stores/documentation-of-fall-risk-patient-store';
import dpjpSheet from '@modules/inpatient/dpjp-sheet/stores/dpjp-sheet.store';
import drugSideEffects from '@modules/pharmacy/drug-side-effects/stores/drug-side-effects.store';
import fallRiskAssessementAdult from '@src/modules/inpatient/fall-risk-assessement-adult/stores/fall-risk-assessement-adult.store';
import fallRiskAssessementChildren from '@src/modules/inpatient/fall-risk-assessment-children/stores/fall-risk-assessment-children.store'
import fallRiskAssessment from '@modules/outpatient/fall-risk-assessment/stores/fall-risk-assessment.store';
import fontSize from '@shared/font-size/stores/font-size.store';
import generalConsent from '@modules/information/general-consent/stores/general-consent.store';
import generalPatientStatementStore from '@src/modules/information/general-patient-statement/stores/general-patient-statement.store';
import glassesPrescription from '@src/modules/optic/glasses-prescription/stores/glasses-prescription.store';
import haisSurveillanceInfection from '@modules/inpatient/hais-infection-surveillance/stores/hais-infection-surveillance.store';
import headerPdfConfig from '@modules/account/header-pdf-config/stores/header-pdf-config.store';
import histories from '@modules/history/stores/history.store'
import hospitalizationLetter from '@src/modules/inpatient/hospitalization-letter/stores/hospitalization-letter.store';
import httpError from '@shared/http-request/stores/http-request.store'
import implementationRiskPatients from '@src/modules/inpatient/implementation-risk-patients/stores/implementation-risk-patients.store';
import informConsent from '@modules/outpatient/inform-consent/stores/inform-consent.store';
import initialNutritionalAssessment from '@src/modules/inpatient/initial-nutritional-assessment/stores/initial-nutritional-assessment.store';
import inpatientInitialNursingAssessment from '@modules/inpatient/inpatient-initial-nursing-assessment/stores/inpatient-initial-nursing-assessment.store';
import inpatientInitialNursingAssessmentChildren from '@modules/inpatient/inpatient-initial-nursing-assessment-children/stores/inpatient-initial-nursing-assessment-children.store';
import inpatientMedicalNote from '@modules/inpatient/inpatient-medical-note/stores/inpatient-medical-note.store';
import inspectionResult from '@modules/outpatient/inspection-result/stores/inspection-result.store'
import inspectionResultYagLaserAndRetinaStore from '@src/modules/outpatient/inspection-result-yag-laser-and-retina/stores/inspection-result-yag-laser-and-retina.store';
import layout from './layout';
import medicalRecordUsers from '@modules/account/medical-record-users/stores/medical-record-users.store';
import medicalSummaryStore from '@src/modules/outpatient/medical-summary/stores/medical-summary.store';
import medsReconciliation from '@modules/pharmacy/meds-reconciliation/stores/meds-reconciliation.store';
import navbar from './navbar';
import newOfficer from '@shared/new-officer/stores/new-officer.store';
import nurse from '@shared/nurse/stores/nurse.store'
import nursingCarePlan from '@modules/inpatient/nursing-care-plan/stores/nursing-care-plan.store';
import nursingInitialAssessment from '@src/modules/outpatient/nursing-initial-assessment/stores/nursing-initial-assessment.store';
import officer from '@shared/officer/stores/officer.store';
import operativeFairyNursingNotes from '@modules/operating-room/operative-fairy-nursing-notes/stores/operative-fairy-nursing-notes.store';
import painMonitoring from '@src/modules/inpatient/pain-monitoring/stores/pain-monitoring.store';
import patient from '@modules/site/patient-list/stores/patient.store';
import patientBpjsStatementStore from '@src/modules/information/patient-bpjs-statement/stores/patient-bpjs-statement.store';
import patientDetail from '@shared/header/stores/patient-detail.store';
import patientHandoverFormStore from '@src/modules/outpatient/patient-handover-form/stores/patient-handover-form.store';
import patientIdentity from '@modules/information/patient-identity/stores/patient-identity.store';
import patientTransferStore from '@src/modules/outpatient/patient-transfers/stores/patient-transfer.store';
import pdfDashboard from '@modules/medical-record/pdf-dashboard/stores/pdf-dashboard.store';
import perioperativeNursingRecordsRajalStore from '@src/modules/outpatient/perioperative-nursing-records/stores/perioperative-nursing-records-rajal.store';
import perioperativeNursingRecordsStore from '@src/modules/operating-room/perioperative-nursing-records/stores/perioperative-nursing-records.store';
import postoperativeInstructionsStore from '@src/modules/operating-room/Postoperative Instructions/stores/postoperative-instructions.store';
import preAnesthesiaForm from '@modules/inpatient/pre-anesthesia-form/stores/pre-anesthesia-form.store';
import preliminaryStudy from '@modules/ro/preliminary-study/stores/preliminary-study.store';
import preparationOfAnestheticEquipmentStore from '@src/modules/operating-room/preparation-of-anesthetic-equipment/stores/preparation-of-anesthetic-equipment.store';
import proofOfOutpatientServicesEmergencyRoomStores from '@src/modules/emergency-room/proof-of-outpatient-services-ugd/stores/proof-of-outpatient-services-emergency-room.stores';
import proofOfOutpatientServicesStores from '@src/modules/outpatient/proof-of-outpatient-services/stores/proof-of-outpatient-services.stores';
import pupilOCTResult from '@src/modules/outpatient/pupil-oct-result/stores/pupil-oct-result.store';
import queue from '@modules/queue/stores/queue.store';
import recordsOfMedicationOnTime from '@modules/pharmacy/records-of-medication-on-time/stores/records-of-medication-on-time.store';
import requestMr from '@modules/account/request-mr/stores/request-mr.store';
import safetyChecklist from '@modules/operating-room/surgery-patient-safety-checklist/stores/safety-checklist.store';
import selectCompany from '@modules/select-company/stores/select-company.store';
import summaryOfHospitalizedPatientStore from '@src/modules/inpatient/summary-of-hospitalized-patients/stores/summary-of-hospitalized-patient.store';
import surgeryReport from '@modules/operating-room/surgery-report/stores/surgery-report.store';
import surgicalAreaMarking from '@modules/outpatient/surgical-area-marking/stores/surgical-area-marking.store';
import triageForm from '@modules/emergency-room/triage-form/stores/triage-form.store';

const rootReducer = {
  auth,
  navbar,
  layout,
  queue,
  patient,
  patientIdentity,
  officer,
  doctor,
  nurse,
  generalConsent,
  preliminaryStudy,
  glassesPrescription,
  doctorPreliminaryStudy,
  pupilOCTResult,
  cpptRo,
  dicom,
  surgeryReport,
  changePin,
  histories,
  cpptOutPatient,
  patientDetail,
  safetyChecklist,
  nursingInitialAssessment,
  selectCompany,
  cpptOk,
  operativeFairyNursingNotes,
  pdfDashboard,
  fallRiskAssessment,
  dailyEducation,
  inspectionResult,
  httpError,
  proofOfOutpatientServicesStores,
  cpptPharmacyStore,
  fontSize,
  triageForm,
  assessmentUgdStore,
  informConsent,
  checklistPraOperasiStore,
  perioperativeNursingRecordsStore,
  perioperativeNursingRecordsRajalStore,
  surgicalAreaMarking,
  inpatientInitialNursingAssessment,
  inpatientMedicalNote,
  InpatientInitialNursingEarlyWarning,
  fallRiskAssessementChildren,
  preAnesthesiaForm,
  dpjpSheet,
  patientTransferStore,
  assesmenPraOperasiStore,
  patientHandoverFormStore,
  postoperativeInstructionsStore,
  summaryOfHospitalizedPatientStore,
  consultationSheet,
  assessmentVitalSigns,
  IntegratedEducationStore,
  hospitalizationLetter,
  painMonitoring,
  implementationRiskPatients,
  cpptInpatient,
  documentationOfFallRiskPatientStore,
  haisSurveillanceInfection,
  nursingCarePlan,
  medsReconciliation,
  drugSideEffects,
  cpptNutrition,
  dischargePlanningStore,
  initialNutritionalAssessment,
  fallRiskAssessementAdult,
  approvalOrRefusalOfAnestheticActionStore,
  requestMr,
  inpatientInitialNursingAssessmentChildren,
  newOfficer,
  anestheticStatus,
  preparationOfAnestheticEquipmentStore,
  medicalRecordUsers,
  generalPatientStatementStore,
  patientBpjsStatementStore,
  cpptEmergencyRoomStore,
  recordsOfMedicationOnTime,
  proofOfOutpatientServicesEmergencyRoomStores,
  medicalSummaryStore,
  bpjsValidate,
  headerPdfConfig,
  inspectionResultYagLaserAndRetinaStore,
}

export default rootReducer;