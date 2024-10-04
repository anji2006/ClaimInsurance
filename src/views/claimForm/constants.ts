enum HealthCoverageType {
    Medicare = "Medicare",
    Medicaid = "Medicaid",
    TRICARE = "TRICARE",
    CHAMPVA = "CHAMPVA",
    GroupHealthPlan = "GroupHealthPlan",
    BlackLung = "FECA BlackLung",
    Other = "Other"
}

export  const healthCoverageOptions = [
    { label: "Medicare", value: HealthCoverageType.Medicare },
    { label: "Medicaid", value: HealthCoverageType.Medicaid },
    { label: "TRICARE", value: HealthCoverageType.TRICARE },
    { label: "CHAMPVA", value: HealthCoverageType.CHAMPVA },
    { label: "Group Health Plan", value: HealthCoverageType.GroupHealthPlan },
    { label: "FECA Black Lung", value: HealthCoverageType.BlackLung },
    { label: "Other", value: HealthCoverageType.Other },
];

enum Relation {
    Self = "Self",
    Child = "Child",
    Spouse = "Spouse",
    Other = "Other"
}

export const relationOptions = [
    {label : "Self", value: Relation.Self},
    {label : "Child", value: Relation.Child},
    {label : "Spouse", value: Relation.Spouse},
    {label : "Other", value: Relation.Other}
]

enum Sex {
    M = "Male",
    F = "Female"
}

export const sexOptions = [
    {label: 'Male', value: Sex.M},
    {label: 'Female', value: Sex.F}
]

enum BooleanEnum {
    yes = "Yes",
    no = "No"
}

export const booleanOptions = [
    {label: "Yes", value: BooleanEnum.yes},
    {label: "No", value: BooleanEnum.no},
]

export const dateFormate = "MM-DD-YYYY"

export const states = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "District of Columbia", value: "DC" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" }
  ];

export const icdIndicatorOptions = [
    {
        label: "ICD-10-RM",
        value: "ICD-10-RM"
    },
    {
        label: "ICD-9-RM",
        value: "ICD-9-RM"
    },
]

export const FIELD_DISCRIPTION = {
    insured_id : "The “Insured’s ID Number” is the identification number of the insured. This information identifies the insured to the payer",
    patient_name: "The “Patient’s Name” is the name of the person who received the treatment or supplies",
    patient_birth_sex: "The “Patient’s Birth Date, Sex” is information that will identify the patient and it distinguishes persons with similar names.",
    insured_name: "The “Insured’s Name” identifies the person who holds the policy, which would be the employee for employer-provided health insurance.",
    patient_address: "The “Patient’s Address” is the patient’s permanent residence. A temporary address or school address should not be used.",
    patient_relation_to_insured: `The “Patient Relationship to Insured” indicates how the patient is related to the insured.
        “Self” would indicate that the insured is the patient. “Spouse” would indicate that the patient is the
        husband or wife or qualified partner, as defined by the insured’s plan. “Child” would indicate that the
        patient is the minor dependent, as defined by the insured’s plan. “Other” would indicate that the
        patient is other than the self, spouse, or child, which may include employee, ward, or dependent, as
        defined by the insured’s plan.`,
    insured_address: "The “Insured’s Address” is the insured’s permanent residence, which may be different from the patient’s address.",
    reserved_nucc: "This field is reserved for NUCC use",
    other_insured_name: "The “Other Insured’s Name” indicates that there is a holder of another policy that may cover the patient.",
    other_insured_group_no: "The “Other Insured’s Policy or Group Number” identifies the policy or group number for coverage of the insured as indicated in Item Number 9.",
    other_insured_plan_name: "The “Insurance Plan Name or Program Name” identifies the name of the plan or program of the other insured as indicated in Item Number 9",
    insured_birth_sex: "The “Insured’s Date of Birth, Sex” is the birth date and gender of the insured as indicated in Item Number 1a."
}

