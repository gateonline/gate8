const questions = [

    // Q1 — MCQ — 1 MARK
    {
        question: "Among the options given, choose the most suitable compatibilizer for blending Polyvinylidene fluoride (PVDF) and Acrylonitrile butadiene styrene (ABS). (G-23)",
        options: [
            "Styrene-acrylonitrile (SAN)",
            "Polybutadiene (PB)",
            "Polymethyl methacrylate (PMMA)",
            "Nylon 6"
        ],
        answer: 2,
        type: "MCQ",
        marks: 1
    },

    // Q2 — MCQ — 1 MARK
    {
        question: "A polymer blend exhibits the following characteristics: single glass transition temperature, uniform morphology, and transparent appearance. The blend is most likely:",
        options: [
            "Completely immiscible",
            "Partially miscible",
            "Fully miscible",
            "Crosslinked"
        ],
        answer: 2,
        type: "MCQ",
        marks: 1
    },

    // Q3 — MCQ — 1 MARK
    {
        question: "Which reinforcement generally provides the highest stiffness-to-weight ratio?",
        options: [
            "Glass fiber",
            "Carbon fiber",
            "Talc",
            "Calcium carbonate"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q4 — MCQ — 1 MARK
    {
        question: "A polymer blend initially shows poor tensile strength. After adding a compatibilizer, SEM images reveal much finer dispersed domains. The improvement in tensile strength is mainly due to:",
        options: [
            "Increased crystallinity",
            "Reduced interfacial tension and better stress transfer",
            "Increased molecular weight",
            "Increased crosslink density"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q5 — MCQ — 1 MARK
    {
        question: "A polymer blend contains two immiscible polymers. The domain size of the dispersed phase decreases from 8 μm to 2 μm after adding a compatibilizer. Which property is most likely to improve?",
        options: [
            "Optical absorbance",
            "Interfacial stress transfer efficiency",
            "Polymer molecular weight",
            "Degree of polymerization"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q6 — MCQ — 1 MARK
    {
        question: "A blend of Polymer A and Polymer B exhibits two distinct glass transition temperatures (Tg) before the addition of a compatibilizer. After adding a compatibilizer, the two Tg values remain unchanged, but the impact strength increases significantly. Which statement best explains this observation?",
        options: [
            "The blend has become completely miscible",
            "The compatibilizer improved interfacial adhesion without making the polymers fully miscible",
            "Both polymers crystallized after adding the compatibilizer",
            "The molecular weights of both polymers increased"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q7 — MCQ — 1 MARK
    {
        question: "A polymer blend has poor impact strength, large dispersed domains, high interfacial tension, and two glass transition temperatures. Which modification is most likely to improve the mechanical properties? (IMP)",
        options: [
            "Increase processing temperature only",
            "Add a suitable compatibilizer",
            "Increase molecular weight of one polymer only",
            "Increase filler loading"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q8 — MCQ — 1 MARK
    {
        question: "A suitable physical compatibilizer of a binary blend of poly(ethylene) and poly(propylene) is (G-24):",
        options: [
            "Poly(caprolactam)",
            "Poly(lactic acid)",
            "Poly(ethylene-block-propylene)",
            "Poly(carbonate)"
        ],
        answer: 2,
        type: "MCQ",
        marks: 1
    },

    // Q9 — MCQ — 1 MARK
    {
        question: "Which statement best describes the role of coupling agents in glass-fibre/polymer composites?",
        options: [
            "They always dissolve the fibres",
            "They can improve chemical or physical bonding between the glass surface and polymer matrix",
            "They replace the matrix entirely",
            "They ensure isotropic mechanical behaviour"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q10 — NAT — 1 MARK
    {
        question: "The glass transition temperature (Tg) of poly(2,6-dimethyl-p-phenylene oxide) (PPO) is 206.8 °C and the Tg of poly(styrene) (PS) is 90 °C. Calculate the Tg of a 50/50 (wt/wt) miscible blend of PPO/PS in °C, rounded to the nearest integer.",
        type: "NAT",
        answer: 140,
        marks: 1
    },

    // Q11 — MCQ — 2 MARKS
    {
        question: "Two polymers A and B form a binary blend. The Flory–Huggins interaction parameter χ is positive. Which statement is correct?",
        options: [
            "The blend must be immiscible at all compositions and temperatures",
            "A positive χ always implies phase separation",
            "A positive χ opposes mixing, but entropy and temperature can still permit miscibility",
            "The blend is necessarily miscible if the molecular weights are equal"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // Q12 — MCQ — 2 MARKS
    {
        question: "A particulate composite contains 40 vol% particles of density 4.0 g/cm³ and 60 vol% polymer matrix of density 1.2 g/cm³. Assuming no voids, calculate the composite density.",
        options: [
            "1.68 g/cm³",
            "2.32 g/cm³",
            "2.80 g/cm³",
            "4.00 g/cm³"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // Q13 — MCQ — 2 MARKS
    {
        question: "A composite consists of 60 vol% glass fibers (modulus = 70 GPa) and 40 vol% epoxy (modulus = 3 GPa). Calculate the longitudinal modulus.",
        options: [
            "41.2 GPa",
            "43.2 GPa",
            "45.6 GPa",
            "48.0 GPa"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // Q14 — MCQ — 2 MARKS
    {
        question: "A polymer engineer compares two blends:\n\nBlend A: Domain size = 1 μm; interfacial adhesion = strong\nBlend B: Domain size = 0.5 μm; interfacial adhesion = weak\n\nWhich blend is expected to exhibit better impact strength?",
        options: [
            "Blend A",
            "Blend B",
            "Both will have identical impact strength",
            "Cannot be predicted from the given information"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // Q15 — MSQ — 2 MARKS
    {
        question: "Which statements are correct? [MSQ]",
        options: [
            "Increasing temperature generally promotes mixing in a typical UCST system",
            "Increasing temperature can promote phase separation in a typical LCST system",
            "Every polymer blend exhibits both a UCST and an LCST",
            "UCST and LCST describe phase-boundary behaviour, not the melting point of a polymer"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 2
    },

    // Q16 — MSQ — 2 MARKS
    {
        question: "Which of the following statements regarding polymer blends are CORRECT? [MSQ]",
        options: [
            "A miscible polymer blend exhibits a single glass transition temperature",
            "A negative Flory–Huggins interaction parameter (χ) favors miscibility",
            "High molecular weight of both polymers favors miscibility due to increased entropy of mixing",
            "PPO/PS is a classic example of a miscible blend"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 2
    },

    // Q17 — MCQ — 2 MARKS
    {
        question: "A polymer blend exhibits an upper critical solution temperature (UCST). On increasing temperature, what generally happens near a fixed composition inside the two-phase region?",
        options: [
            "Phase separation becomes stronger indefinitely",
            "The blend approaches a single homogeneous phase above the cloud-point boundary",
            "The interaction parameter must increase",
            "The entropy of mixing becomes zero"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // Q18 — MCQ — 2 MARKS
    {
        question: "Which statement distinguishes a polymer blend from a polymer matrix composite most accurately?",
        options: [
            "A blend necessarily contains fibres, whereas a composite cannot",
            "A blend combines polymers as its principal constituents, whereas a composite combines a matrix with a distinct reinforcing phase or filler",
            "Both terms always mean the same thing",
            "Every blend is miscible, while every composite is immiscible"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // Q19 — MCQ — 2 MARKS
    {
        question: "A fibre has a tensile strength of 1.5 GPa, diameter of 15 μm and interfacial shear strength of 25 MPa. Calculate the critical fibre length.",
        options: [
            "225 μm",
            "450 μm",
            "900 μm",
            "1200 μm"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // Q20 — MCQ — 2 MARKS
    {
        question: "A particulate composite contains 30 vol% spherical particles. The particle modulus is 150 GPa and the matrix modulus is 3 GPa. What is the upper-bound estimate from the longitudinal rule of mixtures?",
        options: [
            "3.0 GPa",
            "47.1 GPa",
            "46.0 GPa",
            "150 GPa"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // Q21 — NAT — 2 MARKS
    {
        question: "A unidirectional composite is prepared using 70% by volume of epoxy matrix and 30% by volume of carbon fibre. The elastic modulus of the epoxy matrix is 3.5 GPa and the elastic modulus of the carbon fibre is 350 GPa. Calculate the longitudinal elastic modulus of the composite in GPa, rounded to the nearest integer. (2024)",
        type: "NAT",
        answer: 107,
        marks: 2
    },

    // Q22 — MCQ — 2 MARKS
    {
        question: "A composite contains 55 vol% carbon fibre with a modulus of 210 GPa and 45 vol% epoxy matrix with a modulus of 3.5 GPa. Calculate the transverse modulus using the inverse rule of mixtures.",
        options: [
            "7.62 GPa",
            "116.4 GPa",
            "106.4 GPa",
            "3.5 GPa"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // Q23 — MCQ — 2 MARKS
    {
        question: "A unidirectional composite has 40 vol% carbon fibre and 60 vol% epoxy matrix. The moduli are 200 GPa and 5 GPa, respectively. If the composite is subjected to a longitudinal strain of 0.002, calculate the average longitudinal stress in the composite.",
        options: [
            "166 MPa",
            "400 MPa",
            "200 MPa",
            "10 MPa"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // Q24 — MCQ — 2 MARKS
    {
        question: "A unidirectional composite contains 60 vol% carbon fibre and 40 vol% epoxy matrix. The fibre modulus is 200 GPa, fibre tensile strength is 1.5 GPa and matrix modulus is 4 GPa. Assume linear-elastic behaviour of both constituents up to fibre failure and perfect bonding. Calculate the composite stress when the fibres first reach their tensile strength.",
        options: [
            "900 MPa",
            "912 MPa",
            "1500 MPa",
            "1200 MPa"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // Q25 — MCQ — 2 MARKS
    {
        question: "A miscible polymer blend contains 40 wt% polymer A and 60 wt% polymer B. Their glass transition temperatures are 120 °C and −20 °C, respectively. Calculate the blend Tg, rounded to the nearest integer.",
        options: [
            "0 °C",
            "22 °C",
            "40 °C",
            "50 °C"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    }

];
