import React from 'react';
import { List, Datagrid, TextField, DateField, UrlField, NumberField } from 'react-admin';
import CustomInvoiceField from './CustomInvoiceField';

const InvoiceList = (props) => (
  <List {...props}>
    <Datagrid>
      <CustomInvoiceField source="invoice_id" />
      <CustomInvoiceField source="client_name" />
      <CustomInvoiceField source="client_email" />
      <CustomInvoiceField source="policy_name" />
      <CustomInvoiceField source="policy_gross_amount" />
      <CustomInvoiceField source="policy_issue_date" />
      <CustomInvoiceField source="policy_expired_date" />
      <CustomInvoiceField source="payment_status" />
      <CustomInvoiceField source="policy_payment_invoice_attachment" />
    </Datagrid>
  </List>
);

export default InvoiceList;
