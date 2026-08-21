import { UserDocument } from "@/types";

export const documentData: UserDocument[] = [
  {
    id: "d-1",
    name: "Aadhaar Card",
    uploadDate: "18 Aug 2026",
    status: "Secure",
    type: "ID"
  },
  {
    id: "d-2",
    name: "Income Certificate",
    uploadDate: "12 Aug 2026",
    status: "Secure",
    type: "Certificate"
  },
  {
    id: "d-3",
    name: "Bank Passbook",
    uploadDate: "05 Aug 2026",
    status: "Verified",
    type: "Financial"
  }
];
