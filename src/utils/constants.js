export const API_URL = "http://localhost:3030/";

export const colors = {
  primaryColor: "#00bcd4",
  secondaryColor: "rgba(0,0,0,0.87)",
  white: "#fff",
  black: "#000",
  grey: "#fefefe",
  dimGrey: "#fafafa",
  gray: "gray",
};

export const drawerWidth = 250;

export const salutations = [
  { label: "Dr.", value: "Dr" },
  { label: "Mr.", value: "Mr" },
  { label: "Mrs.", value: "Mrs" },
  { label: "Ms.", value: "Ms" },
];

export const countries = [
  { label: "CA - Canada", value: "CA" },
  { label: "MM - Myanmar", value: "MM" },
  { label: "SG - Singapore", value: "SG" },
  { label: "KO - South Korea", value: "KO" },
  { label: "TH - Thailand", value: "TH" },
  { label: "UK - United Kingdom", value: "UK" },
  { label: "US - United States", value: "US" },
];

export const roleTypes = [
  { label: "Admin/Manager", value: "admin/manager" },
  { label: "Lawyer", value: "lawyer" },
  { label: "Manager", value: "manager" },
  { label: "Staff", value: "staff" },
];

export const staffTypes = [
  { label: "Associate", value: "associate" },
  { label: "Associate Director", value: "associate director" },
  { label: "Deputy managing director", value: "deputy managing director" },
  { label: "Director", value: "director" },
  { label: "Executive", value: "executive" },
  { label: "Legal Executive", value: "legal executive" },
  { label: "Managing Director", value: "managing director" },
  { label: "Of Counsel", value: "of counsel" },
  { label: "Secretary", value: "secretary" },
  { label: "Senior Associate", value: "senior associate" },
  { label: "Trainee", value: "trainee" },
];

export const message = {
  case: "Please select case to view for more details",
  client: "Please select client to view for more details",
  staff: "Please select staff to view for more details",
};
export const caseStatusTypes = [
  { label: "Open", value: "Open" },
  { label: "Closed", value: "Closed" },
];

export const CURRENT_USER = localStorage.getItem("CURRENT_USER")
  ? JSON.parse(localStorage.getItem("CURRENT_USER"))
  : null;

export const getInitials = () => {
  if (CURRENT_USER) {
    return (
      CURRENT_USER?.initials ||
      CURRENT_USER?.firstName?.charAt(0).toUpperCase() +
        CURRENT_USER?.lastName?.charAt(0).toUpperCase()
    );
  } else {
    return "-";
  }
};

export const DATE_FORMAT = "M/D/YYYY";
