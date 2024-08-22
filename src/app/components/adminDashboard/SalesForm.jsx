import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Reauseable/Input";
import axios from "axios";
import toast from "react-hot-toast"; // Ensure toast is imported
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/store/Context";

const schema = yup.object().shape({
  invoice_id: yup.string("Invoice Id").required("Invoice Id is required"),
  client_name: yup.string().required("Client Name is required"),
  client_designation: yup.string().required("Client Designation is required"),
  client_mobile: yup.string().required("Client Mobile is required"),
  client_ptcl_uan: yup.string().required("Client UAN is required"),
  client_email: yup.string().email().required("Email is required"),
  client_dob: yup
    .date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .required("Date of birth is required"),
  client_company_name: yup.string().required("Client Company Name is required"),
  policy_company_name: yup.string().required("Policy Company Name is required"),
  policy_name: yup.string().required("Policy Name is required"),
  policy_no: yup.string().required("Policy Number is required"),
  policy_issue_date: yup
    .date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .required("Policy Issue Date is required"),
  policy_expired_date: yup
    .date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .required("Policy Expired Date is required"),
  policy_gross_amount: yup
    .number()
    .typeError("Policy Gross Amount must be a number")
    .positive("Policy Gross Amount must be a positive number")
    .nullable()
    .required("Policy Gross Amount is required"),
  policy_net_amount: yup
    .number()
    .typeError("Net Amount must be a number")
    .positive("Net Amount must be a positive number")
    .nullable()
    .required("Net Amount is required"),
  policy_payment_mode: yup.string().required("Policy Payment Mode is required"),
  policy_payment_invoice_attachment: yup
    .string()
    .required("Policy Invoice Attachment Options are required"),
  partner_agent_employment_code: yup
    .string()
    .required("Partner Agent Employment Code is required"),
  partner_agent_name: yup.string().required("Partner Agent Name is required"),
});

const SalesForm = ({ token }) => {
  console.log("token>>", token);
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    methods.reset();

    try {
      const response = await axios.post(
        `https://oneclick-server-x09s.onrender.com/api/v1/admin/salesInvoice`,
        data,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success === false) {
        console.log("Error: User already exists");
      } else {
        toast.success("Sales invoice submitted successfully");
      }
    } catch (error) {
      console.log("Error in submitting sales invoice:", error);
      toast.error("Registration Error");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-4 gap-3 mt-[20px]">
          <Input label="Invoice Id" type="string" name="invoice_id" />
          <Input label="Client Name" type="text" name="client_name" />
          <Input
            label="Client Designation"
            type="text"
            name="client_designation"
          />
          <Input label="Client Mobile" type="text" name="client_mobile" />
          <Input label="Client UAN" type="text" name="client_ptcl_uan" />
          <Input label="Client Email" type="email" name="client_email" />
          <Input label="" type="date" name="client_dob" />
          <Input
            label="Client Company Name"
            type="text"
            name="client_company_name"
          />
          <Input
            label="Policy Company Name"
            type="text"
            name="policy_company_name"
          />
          <Input label="Policy Name" type="text" name="policy_name" />
          <Input label="Policy Number" type="text" name="policy_no" />
          <Input label="" type="date" name="policy_issue_date" />
          <Input label="" type="date" name="policy_expired_date" />
          <Input
            label="Policy Gross Amount"
            type="number"
            name="policy_gross_amount"
          />
          <Input label="Net Amount" type="number" name="policy_net_amount" />
          <Input
            label="Policy Payment Mode"
            type="text"
            name="policy_payment_mode"
          />
          <Input
            label="Policy Invoice Attachment Options"
            type="text"
            name="policy_payment_invoice_attachment"
          />
          <Input
            label="Partner Agent Code"
            type="text"
            name="partner_agent_employment_code"
          />
          <Input
            label="Partner Agent Name"
            type="text"
            name="partner_agent_name"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue text-white px-[30px] py-[10px] text-[18px] rounded mt-[20px]"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SalesForm;
