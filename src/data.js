const doctorTypes = [
  "Pulmonologist",
  "Gastroenterologist",
  "Endocrinologist",
  "Oncologist",
  "Neurologist",
  "Dentist",
  "Psychiatrist",
  "ENTSpecialist (Otolaryngologist)",
  "Orthopedic",
  "Cardiologist",
  "Dermatologist",
  "Ophthalmologist",
  "Gynecologist",
  "General Physician",
  "Pediatrician",
];

// Each doctor mapped specifically to one of the above types
export const doctorsData = [
  // Pulmonologist
  {
    id: 1,
    name: "Dr. Angela Davis",
    specialty: "Pulmonologist",
    image:
      "https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148814212.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:15 AM", "12:15 PM", "3:15 PM"],
    available: true,
  },
  {
    id: 2,
    name: "Dr. George Harrison",
    specialty: "Pulmonologist",
    image:
      "https://img.freepik.com/free-photo/medium-shot-health-worker-with-equipment_23-2148814236.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["10:00 AM", "1:00 PM", "4:00 PM"],
    available: false,
  },

  // Gastroenterologist
  {
    id: 3,
    name: "Dr. Mark Thompson",
    specialty: "Gastroenterologist",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:45 AM", "11:45 AM", "2:45 PM"],
    available: true,
  },
  {
    id: 4,
    name: "Dr. Nina Brown",
    specialty: "Gastroenterologist",
    image:
      "https://img.freepik.com/premium-photo/african-american-female-doctor-with-stethoscope_380164-247131.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:30 AM", "12:30 PM", "3:30 PM"],
    available: true,
  },

  // Endocrinologist
  {
    id: 5,
    name: "Dr. David Kim",
    specialty: "Endocrinologist",
    image:
      "https://img.freepik.com/premium-photo/medical-services-handsome-black-male-doctor-uniform-posing-with-folded-arms_116547-17582.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:30 AM", "11:30 AM", "2:30 PM"],
    available: false,
  },
  {
    id: 6,
    name: "Dr. Julia Roberts",
    specialty: "Endocrinologist",
    image:
      "https://img.freepik.com/free-photo/doctor-wearing-white-coat-medium-shot_23-2149844579.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "12:00 PM", "3:00 PM"],
    available: true,
  },

  // Oncologist
  {
    id: 7,
    name: "Dr. Samantha Wilson",
    specialty: "Oncologist",
    image:
      "https://img.freepik.com/free-photo/medium-shot-health-worker-wearing-mask_23-2148814237.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "12:00 PM", "3:00 PM"],
    available: true,
  },
  {
    id: 8,
    name: "Dr. Kevin Parker",
    specialty: "Oncologist",
    image:
      "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["10:00 AM", "1:00 PM", "4:00 PM"],
    available: false,
  },

  // Neurologist
  {
    id: 9,
    name: "Dr. Olivia Martinez",
    specialty: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/portrait-young-african-american-woman-doctor-against-blue-background_93675-132921.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:45 AM", "12:30 PM", "3:15 PM"],
    available: true,
  },
  {
    id: 10,
    name: "Dr. Michael Jordan",
    specialty: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/black-nurse-man-getting-ready-work_52683-92787.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:00 AM", "11:00 AM", "2:00 PM"],
    available: false,
  },

  // Dentist
  {
    id: 11,
    name: "Dr. James Smith",
    specialty: "Dentist",
    image:
      "https://img.freepik.com/free-photo/friendly-afro-american-doctor-holding-clipboard-smiling-camera-isolated-gray-background_231208-2232.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:30 AM", "11:00 AM", "2:00 PM"],
    available: false,
  },
  {
    id: 12,
    name: "Dr. Emma Watson",
    specialty: "Dentist",
    image:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "11:30 AM", "1:30 PM"],
    available: true,
  },

  // Psychiatrist
  {
    id: 13,
    name: "Dr. Jessica Lopez",
    specialty: "Psychiatrist",
    image:
      "https://img.freepik.com/premium-photo/smiling-young-african-american-curly-woman-doctor-therapist-white-coat-making-notes-tablet_116547-68647.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:30 AM", "12:30 PM", "3:30 PM"],
    available: false,
  },
  {
    id: 14,
    name: "Dr. Samuel Adams",
    specialty: "Psychiatrist",
    image:
      "https://img.freepik.com/premium-photo/portrait-smiling-male-doctor-with-arms-crossed_13339-261141.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:00 AM", "10:30 AM", "1:00 PM"],
    available: true,
  },

  // ENTSpecialist (Otolaryngologist)
  {
    id: 15,
    name: "Dr. Steve Rogers",
    specialty: "ENTSpecialist (Otolaryngologist)",
    image:
      "https://img.freepik.com/free-photo/friendly-afroamerican-doctor-working-laptop_93675-128519.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:00 AM", "11:00 AM", "2:00 PM"],
    available: true,
  },
  {
    id: 16,
    name: "Dr. Bethany Clark",
    specialty: "ENTSpecialist (Otolaryngologist)",
    image:
      "https://img.freepik.com/free-photo/black-nurse-man-getting-ready-work_52683-92789.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:15 AM", "12:15 PM", "3:15 PM"],
    available: false,
  },

  // Orthopedic
  {
    id: 17,
    name: "Dr. William Brown",
    specialty: "Orthopedic",
    image:
      "https://img.freepik.com/free-photo/cheerful-ethnic-medic-with-papers_23-2147767273.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:15 AM", "11:45 AM", "2:45 PM"],
    available: false,
  },
  {
    id: 18,
    name: "Dr. Sandra Lee",
    specialty: "Orthopedic",
    image:
      "https://img.freepik.com/free-photo/medium-shot-health-worker-wearing-mask_23-2148814237.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:30 AM", "12:30 PM", "3:30 PM"],
    available: true,
  },

  // Cardiologist
  {
    id: 19,
    name: "Dr. Michael Lee",
    specialty: "Cardiologist",
    image:
      "https://img.freepik.com/free-photo/vertical-portrait-african-american-medical-doctor-with-stethoscope-posing-confident-wearing-scrubs-smiling-medic-lab-coat-white-uniform-standing-with-arms-crossed-studio_482257-33326.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["10:00 AM", "1:30 PM", "3:30 PM"],
    available: false,
  },
  {
    id: 20,
    name: "Dr. Karen Wilson",
    specialty: "Cardiologist",
    image:
      "https://img.freepik.com/free-photo/close-up-health-worker_23-2149112513.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "11:00 AM", "2:00 PM"],
    available: true,
  },

  // Dermatologist
  {
    id: 21,
    name: "Dr. Emily Chen",
    specialty: "Dermatologist",
    image:
      "https://img.freepik.com/premium-photo/portrait-african-female-doctor-workplace_255667-6119.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:15 AM", "12:00 PM", "4:00 PM"],
    available: true,
  },
  {
    id: 22,
    name: "Dr. Paul Stewart",
    specialty: "Dermatologist",
    image:
      "https://img.freepik.com/premium-photo/friendly-doctor-holding-clipboard_13339-238544.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:45 AM", "11:45 AM", "3:00 PM"],
    available: false,
  },

  // Ophthalmologist
  {
    id: 23,
    name: "Dr. Irene Cooper",
    specialty: "Ophthalmologist",
    image:
      "https://img.freepik.com/premium-photo/young-female-black-doctor-standing-window-clinic-with-file-dossier_79405-12790.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "10:00 AM", "1:00 PM"],
    available: true,
  },
  {
    id: 24,
    name: "Dr. Jason Green",
    specialty: "Ophthalmologist",
    image:
      "https://img.freepik.com/free-photo/portrait-happy-general-practitioner-with-digital-tablet_1262-12395.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:30 AM", "11:30 AM", "2:30 PM"],
    available: false,
  },

  // Gynecologist
  {
    id: 25,
    name: "Dr. Henry Evans",
    specialty: "Gynecologist",
    image:
      "https://img.freepik.com/free-photo/african-american-doctor-male-lab-coat-with-stethoscope-outdoor_627829-14426.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:30 AM", "11:30 AM", "3:00 PM"],
    available: false,
  },
  {
    id: 26,
    name: "Dr. Linda Martinez",
    specialty: "Gynecologist",
    image:
      "https://img.freepik.com/free-photo/woman-working-as-doctor_23-2148827810.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "12:00 PM", "3:00 PM"],
    available: true,
  },

  // General Physician
  {
    id: 27,
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    image:
      "https://img.freepik.com/free-photo/female-doctor-holding-syringe-with-vaccine_23-2149014422.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "10:30 AM", "1:00 PM", "3:00 PM"],
    available: true,
  },
  {
    id: 28,
    name: "Dr. Robert Garcia",
    specialty: "General Physician",
    image:
      "https://img.freepik.com/free-photo/portrait-candid-male-doctor_329181-611.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:00 AM", "10:15 AM", "1:15 PM", "4:00 PM"],
    available: false,
  },

  // Pediatrician
  {
    id: 29,
    name: "Dr. Lisa Patel",
    specialty: "Pediatrician",
    image:
      "https://img.freepik.com/free-photo/doctor-preparing-consult_23-2149309941.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["9:00 AM", "11:30 AM", "2:30 PM"],
    available: true,
  },
  {
    id: 30,
    name: "Dr. Daniel Scott",
    specialty: "Pediatrician",
    image:
      "https://img.freepik.com/free-photo/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-cheerful-smiling-hispanic-male-nurse-doctor-er-wearing-scrubs-glasses-talking-patient-clinic_1258-58757.jpg?ga=GA1.1.817869555.1748171717&semt=ais_hybrid&w=740",
    appointments: ["8:15 AM", "11:45 AM", "3:00 PM"],
    available: false,
  },
];
