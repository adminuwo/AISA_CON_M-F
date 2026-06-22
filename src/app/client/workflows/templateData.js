export const templateData = {
  "Hospital": {
    nodes: [
      { id: "start", type: "trigger", position: { x: 400, y: 50 }, data: { keyword: "hospital" } },
      { id: "welcome", type: "buttons", position: { x: 400, y: 200 }, data: { 
          message: "Hello 👋\n\nWelcome to ABC Multispeciality Hospital 🏥\nWe are here to help you with appointments, health services, and patient support.\n\nPlease choose an option below:", 
          buttons: ["Book Appointment", "Health Packages", "Emergency & Support"] 
      }},
      
      // Path 1: Book Appointment
      { id: "dept_select", type: "buttons", position: { x: 0, y: 450 }, data: { 
          message: "Please select the department you wish to visit:", 
          buttons: ["General Physician", "Cardiology", "Orthopedics"] 
      }},
      { id: "ask_name", type: "plain", position: { x: 0, y: 700 }, data: { message: "Please enter Patient Name." }},
      { id: "ask_age", type: "plain", position: { x: 0, y: 850 }, data: { message: "Please enter Patient Age." }},
      { id: "ask_date", type: "plain", position: { x: 0, y: 1000 }, data: { message: "Please share your preferred appointment date." }},
      { id: "appt_summary", type: "plain", position: { x: 0, y: 1150 }, data: { message: "Thank you for sharing the details.\n\n📋 Appointment Summary\nPatient Name: {Name}\nAge: {Age}\nDepartment: {Department}\nPreferred Date: {Date}\n\n✅ Your appointment request has been submitted successfully.\nOur coordinator will contact you within 15 minutes." }},
      
      // Path 2: Health Packages
      { id: "pkg_select", type: "buttons", position: { x: 400, y: 450 }, data: { 
          message: "Choose a package that suits your needs:", 
          buttons: ["Basic Checkup", "Heart Health", "Family Package"] 
      }},
      { id: "heart_pkg", type: "buttons", position: { x: 400, y: 700 }, data: { 
          message: "❤️ Heart Health Package\n✔ ECG\n✔ Blood Pressure Screening\n✔ Cholesterol Test\n✔ Cardiology Consultation\n\nSpecial Offer Price: ₹2,999\n\nWould you like to speak with our health advisor?", 
          buttons: ["Yes", "Call Me Later", "Main Menu"] 
      }},
      { id: "advisor_contact", type: "plain", position: { x: 400, y: 950 }, data: { message: "Thank you.\nOur healthcare advisor will contact you shortly and guide you further." }},
      
      // Path 3: Emergency & Support
      { id: "support_select", type: "buttons", position: { x: 800, y: 450 }, data: { 
          message: "How can we help you?", 
          buttons: ["Emergency", "Location", "Talk to Support"] 
      }},
      { id: "emergency_info", type: "plain", position: { x: 700, y: 700 }, data: { message: "🚨 Emergency Helpline\nCall: +91 XXXXX XXXXX\nOur emergency team is available 24×7." }},
      { id: "location_info", type: "plain", position: { x: 1000, y: 700 }, data: { message: "📍 ABC Multispeciality Hospital\nMain Road, City Center\n\n🗺 Google Maps Location:\n(Location Link)\n\nWe look forward to serving you." }},
      { id: "talk_support", type: "plain", position: { x: 1300, y: 700 }, data: { message: "👩⚕️ Please briefly describe your concern.\nOur patient care executive will contact you shortly." }}
    ],
    edges: [
      { id: "e-start", source: "start", target: "welcome", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 1
      { id: "e-welcome-dept", source: "welcome", target: "dept_select", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-dept-name-1", source: "dept_select", target: "ask_name", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-dept-name-2", source: "dept_select", target: "ask_name", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-dept-name-3", source: "dept_select", target: "ask_name", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-name-age", source: "ask_name", target: "ask_age", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-age-date", source: "ask_age", target: "ask_date", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-date-summary", source: "ask_date", target: "appt_summary", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 2
      { id: "e-welcome-pkg", source: "welcome", target: "pkg_select", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-pkg-heart", source: "pkg_select", target: "heart_pkg", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-heart-advisor", source: "heart_pkg", target: "advisor_contact", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 3
      { id: "e-welcome-support", source: "welcome", target: "support_select", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-support-emerg", source: "support_select", target: "emergency_info", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-support-loc", source: "support_select", target: "location_info", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "e-support-talk", source: "support_select", target: "talk_support", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } }
    ]
  },
  "Mall": {
    nodes: [
      { id: "start", type: "trigger", position: { x: 800, y: 50 }, data: { keyword: "mall" } },
      { id: "welcome", type: "buttons", position: { x: 800, y: 200 }, data: { 
          message: "Hello 👋\n\nWelcome to City Center Mall 🏬\nYour one-stop destination for Shopping, Dining, Entertainment & Exclusive Deals.\n\nHow can we assist you today?", 
          buttons: ["Offers & Promotions", "Stores & Brands", "Customer Assistance"] 
      }},
      
      // Path 1: Offers & Promotions
      { id: "offers_select", type: "buttons", position: { x: 0, y: 450 }, data: { 
          message: "🎉 Discover Today's Best Deals\n\nPlease select a category:", 
          buttons: ["Fashion Deals", "Electronics Offers", "Food Court Specials"] 
      }},
      { id: "fashion_deals", type: "buttons", position: { x: 0, y: 700 }, data: { 
          message: "🔥 Up to 60% OFF on Selected Brands\n🔥 Buy 2 Get 1 Free on Fashion Accessories\n🔥 Exclusive Weekend Discounts\n\nWould you like to receive personalized offers and sale alerts?", 
          buttons: ["Yes", "No"] 
      }},
      { id: "ask_name_vip", type: "plain", position: { x: 0, y: 950 }, data: { message: "Please share your name." }},
      { id: "vip_enrolled", type: "plain", position: { x: 0, y: 1100 }, data: { message: "Thank you, {Name}!\n\n🎁 You are now enrolled in our VIP Deals Program.\n\nYou will receive:\n✔ Exclusive Discount Alerts\n✔ Festival Sale Updates\n✔ Early Access Offers\n✔ Special Reward Coupons" }},
      
      // Path 2: Stores & Brands
      { id: "stores_select", type: "buttons", position: { x: 800, y: 450 }, data: { 
          message: "Please select a category:", 
          buttons: ["Fashion", "Electronics", "Dining & Cafes"] 
      }},
      { id: "fashion_brands", type: "buttons", position: { x: 400, y: 700 }, data: { 
          message: "Popular Brands Available:\n✔ Zara\n✔ H&M\n✔ Levi's\n✔ Lifestyle\n✔ Max Fashion\n\nWould you like directions to a store?", 
          buttons: ["Yes", "No"] 
      }},
      { id: "ask_store_name", type: "plain", position: { x: 400, y: 950 }, data: { message: "Please enter store name." }},
      { id: "store_location", type: "plain", position: { x: 400, y: 1100 }, data: { message: "📍 Store Location Shared\n\nYou can also visit our Customer Help Desk for assistance." }},
      
      { id: "dining_info", type: "buttons", position: { x: 800, y: 700 }, data: { 
          message: "Looking for something delicious?\n\nAvailable Options:\n🍕 Pizza & Fast Food\n☕ Cafes & Coffee Shops\n🍛 Family Restaurants\n\nToday's Specials:\n🔥 Buy 1 Get 1 Pizza\n🔥 Free Dessert with Family Meal\n🔥 Coffee Combo Offers\n\nWould you like table reservation assistance?", 
          buttons: ["Yes", "No"] 
      }},
      { id: "dining_reservation", type: "plain", position: { x: 800, y: 950 }, data: { message: "Our dining concierge will contact you shortly." }},
      
      // Path 3: Customer Assistance
      { id: "assist_select", type: "buttons", position: { x: 1600, y: 450 }, data: { 
          message: "How can we help you?", 
          buttons: ["Parking Info", "Events", "Customer Service"] 
      }},
      { id: "parking_info", type: "plain", position: { x: 1200, y: 700 }, data: { message: "🚗 PARKING INFORMATION\n\nParking Facilities Available:\n✔ Multi-Level Parking\n✔ EV Charging Stations\n✔ Valet Parking\n✔ 24/7 Security Monitoring\n\nCurrent Status:\n🟢 Parking Available\n\nNeed further assistance?\nReply HELP." }},
      
      { id: "events_info", type: "buttons", position: { x: 1600, y: 700 }, data: { 
          message: "🎭 EVENTS & ENTERTAINMENT\n\nUpcoming Mall Events\n\n🎵 Live Music Weekend\n🎁 Mega Shopping Festival\n🎨 Kids Activity Zone\n🍔 Food Carnival\n\nWould you like event reminders?", 
          buttons: ["Yes", "No"] 
      }},
      { id: "event_reminders", type: "plain", position: { x: 1600, y: 950 }, data: { message: "🎉 Great!\nYou'll receive event reminders before every major event." }},
      
      { id: "cust_service", type: "plain", position: { x: 2000, y: 700 }, data: { message: "👩💼 CUSTOMER SERVICE\n\nPlease tell us how we can assist you.\n\nExamples:\n• Lost & Found\n• Store Complaint\n• Facility Issue\n• General Inquiry" }},
      { id: "cust_req_reg", type: "plain", position: { x: 2000, y: 850 }, data: { message: "Your request has been registered.\n\nA customer service executive will contact you shortly." }}
    ],
    edges: [
      { id: "m-e-start", source: "start", target: "welcome", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 1
      { id: "m-e-wel-off", source: "welcome", target: "offers_select", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-off-fash", source: "offers_select", target: "fashion_deals", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-fash-vip", source: "fashion_deals", target: "ask_name_vip", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-vip-done", source: "ask_name_vip", target: "vip_enrolled", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 2
      { id: "m-e-wel-store", source: "welcome", target: "stores_select", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-store-fash", source: "stores_select", target: "fashion_brands", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-fbr-ask", source: "fashion_brands", target: "ask_store_name", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-ask-loc", source: "ask_store_name", target: "store_location", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-store-dine", source: "stores_select", target: "dining_info", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-dine-res", source: "dining_info", target: "dining_reservation", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 3
      { id: "m-e-wel-ass", source: "welcome", target: "assist_select", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-ass-park", source: "assist_select", target: "parking_info", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-ass-ev", source: "assist_select", target: "events_info", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-ev-rem", source: "events_info", target: "event_reminders", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-ass-cust", source: "assist_select", target: "cust_service", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "m-e-cust-req", source: "cust_service", target: "cust_req_reg", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } }
    ]
  },
  "Real Estate": {
    nodes: [
      { id: "start", type: "trigger", position: { x: 800, y: 50 }, data: { keyword: "real estate" } },
      { id: "welcome", type: "buttons", position: { x: 800, y: 200 }, data: { 
          message: "Hello 👋\n\nWelcome to XYZ Properties 🏠\nWhether you're looking to Buy, Rent, or Invest, we're here to help you find the perfect property.\n\nHow can we assist you today?", 
          buttons: ["Buy Property", "Rent Property", "Property Consultant"] 
      }},
      
      // Path 1: Buy Property
      { id: "buy_type", type: "buttons", position: { x: 0, y: 450 }, data: { 
          message: "Great Choice! 🏡\n\nPlease select your preferred property type:", 
          buttons: ["Apartment", "Villa", "Commercial"] 
      }},
      { id: "buy_budget", type: "buttons", position: { x: 0, y: 700 }, data: { 
          message: "Please select your budget range:", 
          buttons: ["Under ₹50 Lakhs", "₹50L - ₹1 Crore", "Above ₹1 Crore"] 
      }},
      { id: "buy_location", type: "plain", position: { x: 0, y: 950 }, data: { message: "Please share your preferred location." }},
      { id: "buy_summary", type: "plain", position: { x: 0, y: 1100 }, data: { message: "📋 Property Requirement Summary\n\nProperty Type: {Type}\nBudget: {Budget}\nLocation: {Location}\n\n✅ Thank you.\nOur property specialist will shortlist suitable properties and contact you shortly." }},
      { id: "buy_brochure", type: "buttons", position: { x: 0, y: 1250 }, data: { 
          message: "🏡 PROPERTY MATCHING\n\nBased on your requirements, we can provide:\n✔ Ready-to-Move Properties\n✔ Under Construction Projects\n✔ Luxury Residences\n✔ Investment Opportunities\n\nWould you like property brochures?", 
          buttons: ["Yes", "Schedule a Call"] 
      }},
      { id: "buy_brochure_ack", type: "plain", position: { x: 0, y: 1500 }, data: { message: "Thank you.\nOur team will share detailed property information shortly." }},
      
      // Path 2: Rent Property
      { id: "rent_type", type: "buttons", position: { x: 800, y: 450 }, data: { 
          message: "Looking for a rental property?\n\nPlease select:", 
          buttons: ["Apartment", "Office Space", "Commercial Unit"] 
      }},
      { id: "rent_budget", type: "plain", position: { x: 800, y: 700 }, data: { message: "Please share your monthly rental budget." }},
      { id: "rent_location", type: "plain", position: { x: 800, y: 850 }, data: { message: "Please share preferred area/location." }},
      { id: "rent_ack", type: "plain", position: { x: 800, y: 1000 }, data: { message: "Thank you.\nOur rental specialist will contact you with available options." }},
      { id: "rent_showcase", type: "buttons", position: { x: 800, y: 1150 }, data: { 
          message: "📸 PROPERTY SHOWCASE\n\nAvailable Property Features:\n✔ Photos & Videos\n✔ Floor Plans\n✔ Location Advantages\n✔ Nearby Schools & Hospitals\n✔ Price Details\n\nWould you like to receive property listings directly on WhatsApp?", 
          buttons: ["Yes", "No"] 
      }},
      
      // Path 3: Property Consultant
      { id: "consultant_info", type: "plain", position: { x: 1600, y: 450 }, data: { message: "Our experts can assist you with:\n\n🏡 Property Buying\n📈 Real Estate Investment\n🏢 Commercial Properties\n\nPlease share your name and contact number." }},
      { id: "consultant_ack", type: "plain", position: { x: 1600, y: 650 }, data: { message: "Thank you.\nA senior property consultant will contact you shortly." }},
      { id: "site_visit", type: "plain", position: { x: 1600, y: 800 }, data: { message: "📅 SITE VISIT BOOKING\n\nInterested in a property?\nSchedule a Site Visit.\n\nPlease share:\n📅 Preferred Date\n⏰ Preferred Time" }},
      { id: "site_visit_ack", type: "plain", position: { x: 1600, y: 1000 }, data: { message: "✅ Site Visit Request Submitted\n\nOur representative will confirm your visit shortly." }}
    ],
    edges: [
      { id: "r-e-start", source: "start", target: "welcome", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 1
      { id: "r-e-wel-buy", source: "welcome", target: "buy_type", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-buy-b1", source: "buy_type", target: "buy_budget", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-buy-b2", source: "buy_type", target: "buy_budget", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-buy-b3", source: "buy_type", target: "buy_budget", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-bud-loc", source: "buy_budget", target: "buy_location", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-bud-loc2", source: "buy_budget", target: "buy_location", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-bud-loc3", source: "buy_budget", target: "buy_location", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-loc-sum", source: "buy_location", target: "buy_summary", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-sum-bro", source: "buy_summary", target: "buy_brochure", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-bro-ack", source: "buy_brochure", target: "buy_brochure_ack", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-bro-ack2", source: "buy_brochure", target: "buy_brochure_ack", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 2
      { id: "r-e-wel-rent", source: "welcome", target: "rent_type", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-rent-b1", source: "rent_type", target: "rent_budget", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-rent-b2", source: "rent_type", target: "rent_budget", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-rent-b3", source: "rent_type", target: "rent_budget", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-rbud-loc", source: "rent_budget", target: "rent_location", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-rloc-ack", source: "rent_location", target: "rent_ack", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-rack-show", source: "rent_ack", target: "rent_showcase", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 3
      { id: "r-e-wel-cons", source: "welcome", target: "consultant_info", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-cons-ack", source: "consultant_info", target: "consultant_ack", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-ack-site", source: "consultant_ack", target: "site_visit", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "r-e-site-ack", source: "site_visit", target: "site_visit_ack", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } }
    ]
  },
  "School": {
    nodes: [
      { id: "start", type: "trigger", position: { x: 600, y: 50 }, data: { keyword: "school" } },
      { id: "welcome", type: "buttons", position: { x: 600, y: 200 }, data: { 
          message: "Hello 👋\n\nWelcome to ABC International School 🎓\nWe are delighted to assist you with admissions, fee information, and student support.\n\nPlease choose an option below:", 
          buttons: ["Admission Inquiry", "Fee & Academic Info", "Parent Support"] 
      }},
      
      // Path 1: Admission Inquiry
      { id: "ask_name", type: "plain", position: { x: 0, y: 450 }, data: { message: "Thank you for your interest in ABC International School.\n\nPlease provide the following details:\n\n👦 Student Name" }},
      { id: "ask_grade", type: "plain", position: { x: 0, y: 650 }, data: { message: "📚 Grade/Class Applying For" }},
      { id: "ask_phone", type: "plain", position: { x: 0, y: 800 }, data: { message: "📱 Parent Contact Number" }},
      { id: "adm_summary", type: "plain", position: { x: 0, y: 950 }, data: { message: "📋 Admission Summary\n\nStudent Name: {Name}\nClass: {Grade}\nContact Number: {Phone}\n\n✅ Your admission inquiry has been submitted successfully.\n\nOur admissions counselor will contact you shortly and guide you through the admission process." }},
      { id: "highlights", type: "plain", position: { x: 0, y: 1150 }, data: { message: "🏫 SCHOOL HIGHLIGHTS\n\nWhy Choose ABC International School?\n\n✔ Experienced Faculty\n✔ Smart Classrooms\n✔ Sports & Extracurricular Activities\n✔ Modern Campus Facilities\n✔ Academic Excellence" }},
      
      // Path 2: Fee & Academic Info
      { id: "acad_select", type: "buttons", position: { x: 600, y: 450 }, data: { 
          message: "Please select:", 
          buttons: ["Fee Structure", "Curriculum Info", "Academic Calendar"] 
      }},
      { id: "ask_class_fee", type: "plain", position: { x: 400, y: 700 }, data: { message: "Our fee structure varies by grade level.\n\nPlease share the class you are interested in." }},
      { id: "fee_details", type: "plain", position: { x: 400, y: 850 }, data: { message: "Our admissions team will send the complete fee details and payment information." }},
      { id: "curriculum", type: "buttons", position: { x: 800, y: 700 }, data: { 
          message: "📖 CURRICULUM INFORMATION\n\nWe offer:\n✔ CBSE Curriculum\n✔ Activity-Based Learning\n✔ Digital Learning Support\n✔ Regular Assessments\n\nWould you like a callback from our academic counselor?", 
          buttons: ["Yes", "No"] 
      }},
      { id: "callback_ack", type: "plain", position: { x: 800, y: 950 }, data: { message: "Thank you for letting us know. Our team will assist you accordingly." }},
      
      // Path 3: Parent Support
      { id: "support_select", type: "buttons", position: { x: 1200, y: 450 }, data: { 
          message: "How can we assist you?", 
          buttons: ["School Office", "Transport Info", "Campus Visit"] 
      }},
      { id: "transport_info", type: "plain", position: { x: 1000, y: 700 }, data: { message: "🚌 TRANSPORT INFORMATION\n\nWe provide safe and reliable transportation services across major city areas.\n\n🚍 GPS Enabled Buses\n👨✈️ Verified Drivers\n📍 Route Tracking\n\nOur transport coordinator will contact you with route details." }},
      { id: "ask_visit_date", type: "plain", position: { x: 1400, y: 700 }, data: { message: "Please share your preferred visit date." }},
      { id: "visit_confirm", type: "plain", position: { x: 1400, y: 850 }, data: { message: "Thank you.\n\nOur team will confirm your campus tour shortly." }}
    ],
    edges: [
      { id: "s-e-start", source: "start", target: "welcome", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 1
      { id: "s-e-welcome-adm", source: "welcome", target: "ask_name", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-name-grade", source: "ask_name", target: "ask_grade", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-grade-phone", source: "ask_grade", target: "ask_phone", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-phone-summary", source: "ask_phone", target: "adm_summary", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-summary-high", source: "adm_summary", target: "highlights", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 2
      { id: "s-e-welcome-acad", source: "welcome", target: "acad_select", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-acad-fee", source: "acad_select", target: "ask_class_fee", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-fee-details", source: "ask_class_fee", target: "fee_details", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-acad-curr", source: "acad_select", target: "curriculum", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-curr-ack-yes", source: "curriculum", target: "callback_ack", sourceHandle: "btn-0", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-curr-ack-no", source: "curriculum", target: "callback_ack", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      
      // Path 3
      { id: "s-e-welcome-sup", source: "welcome", target: "support_select", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-sup-trans", source: "support_select", target: "transport_info", sourceHandle: "btn-1", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-sup-visit", source: "support_select", target: "ask_visit_date", sourceHandle: "btn-2", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } },
      { id: "s-e-visit-conf", source: "ask_visit_date", target: "visit_confirm", animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } }
    ]
  }
};
