import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(
    private http: HttpService
  ) { }

  doRefer(referral) {
    return this.http.post('/Cust/ReferAfriend/', referral);
  }

  resendOtp(phone) {
    return this.http.post('/Cust/PostsendLoginResendSmsReferal/', {
      MobileNumber: phone
    });
  }

  verifyOtp(phone, otp) {
    return this.http.post('/Cust/PostVerifyLogintokenReferal/', {
      MobileNumber: phone,
      OTP: otp
    });
  }

  applyLoan(application) {
    return this.http.post('/Cust/ApplyHomeLoanSelfLead/', application);
  }

  getReferralList() {
    return this.http.get('/Cust/GetLeadAndReferralDetails/');
  }

  getLoanDetails(id) {
    return this.http.get(`/Cust/GetCustomerDetails/?LeadId=${id}`);
  }

  getEarningList() {
    return this.http.get('/Cust/GetCustomerEarningDetails/');
  }

  getReferralEarningDetails(id) {
    return this.http.get(`/Cust/GetReferralEarningDetails/?LeadId=${id}`);
  }

  getLeadDocumentDetails(id) {
    return this.http.get(`/Auth/GetLeadDocumentDetails/?LeadId=${id}`);
  }

  deleteDocument(id) {
    return this.http.get(`/User/DeleteDocument/?DocumentId=${id}`);
  }

  getDashboardImage() {
    return this.http.get('/Cust/GetDashboardImage');
  }

  uploadDocument(leadId, file, docId) {
    return this.http.post('/Cust/Postdocument/', {
      file: file,
      LeadId: leadId,
      DocId: docId
    });
  }

  getBankStatement() {
    return this.http.get('/Cust/GetBankStatment/', {});
  }

  getRemarks(leadId) {
    return this.http.get(`/Cust/GetLeadNotes/?LeadId=${leadId}`);
  }

}
