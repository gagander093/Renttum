export default {
  API_BASE: 'http://api.apnarupee.in/api',
  getSteps: (status) => {
    const LOAN_STATUS_SERVER = [
      'InProgress',
      'DocPick',
      'Login',
      'Approved',
      'Disbursed',
      'Cancelled'
    ];
    const LOAN_STATUS = {
      InProgress: 'Applied',
      DocPick: 'Documents Picked',
      Login: 'Login in bank',
      Approved: 'Approved in bank',
      Disbursed: 'Disbursed',
      Cancelled: 'Cancelled'
    };

    const idx = LOAN_STATUS_SERVER.indexOf(status);
    const last = LOAN_STATUS_SERVER.length - 1;
    const statuses = [];

    statuses.push({
      title: LOAN_STATUS[LOAN_STATUS_SERVER[0]],
      status: (idx > 0) ? 'complete' : 'active'
    });

    if (idx == last) {
      statuses.push({
        title: LOAN_STATUS[LOAN_STATUS_SERVER[last]],
        status: 'cancelled'
      });
    } else {
      for (var i = 1; i < last; i++) {
        let sts = 'inactive';

        if (i < idx) {
          sts = 'complete';
        } else if (i == idx) {
          sts = 'active';
        }

        statuses.push({
          title: LOAN_STATUS[LOAN_STATUS_SERVER[i]],
          status: sts
        });
      }
    }

    return statuses;
  }
}