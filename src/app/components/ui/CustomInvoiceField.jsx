import React from "react";
import { TextField, DateField, UrlField, NumberField } from "react-admin";
import { Typography, Grid } from "@mui/material";

const CustomInvoiceField = ({ record = {}, source }) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h6">Invoice Details</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Invoice ID:</Typography>
      <Typography variant="body2">{record.invoice_id}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Client Name:</Typography>
      <Typography variant="body2">{record.client_name}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Client Email:</Typography>
      <Typography variant="body2">{record.client_email}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Policy Name:</Typography>
      <Typography variant="body2">{record.policy_name}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Gross Amount:</Typography>
      <Typography variant="body2">{record.policy_gross_amount}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Issue Date:</Typography>
      <Typography variant="body2">{record.policy_issue_date}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Expired Date:</Typography>
      <Typography variant="body2">{record.policy_expired_date}</Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant="body1">Payment Status:</Typography>
      <Typography variant="body2">{record.payment_status}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1">Invoice Attachment:</Typography>
      <a
        href={record.policy_payment_invoice_attachment}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Invoice
      </a>
    </Grid>
  </Grid>
);

export default CustomInvoiceField;
