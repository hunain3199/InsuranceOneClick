import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  useCreate,
  useRedirect,
  useNotify,
  SelectInput, // Import the useRedirect hook
} from "react-admin";

export const PostCreate = () => {
  const [create] = useCreate();
  const notify = useNotify();
  const redirect = useRedirect(); // Initialize redirect hook
  const totalInvoice = localStorage.getItem("total-invoice");
  console.log(totalInvoice);

  // Function to generate the invoice ID
  const generateInvoiceId = (currentInvoicesCount) => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
    const month = `0${date.getMonth() + 1}`.slice(-2); // Two-digit month (e.g., 01, 02, ... 12)
    const invoiceNumber = `000000${currentInvoicesCount + 1}`.slice(-7); // 7 digit invoice number

    return `INVC-${year}${month}-${invoiceNumber}`;
  };

  const postSave = async (data) => {
    const currentInvoicesCount = parseInt(totalInvoice);
    const invoiceData = {
      ...data,
      invoice_id: generateInvoiceId(currentInvoicesCount),
    };
    console.log(invoiceData);

    // Create the post with the new invoice ID
    await create("salesInvoice", { data: invoiceData });

    // Redirect to the list after successful creation
    notify(`Invoice Created`);
    redirect('list', 'getInvoices');
  };

  return (
    <Create redirect="list">
      <SimpleForm onSubmit={postSave}>
        <TextInput source="client_company_name" validate={[required()]} />
        <TextInput source="client_designation" validate={[required()]} />
        <TextInput source="client_dob" validate={[required()]} />
        <TextInput source="client_email" validate={[required()]} />
        <TextInput source="client_mobile" validate={[required()]} />
        <TextInput source="client_name" validate={[required()]} />
        <TextInput source="client_ptcl_uan" validate={[required()]} />
        <TextInput source="partner_agent_name" validate={[required()]} />
        {/* <TextInput
          source="payment_status"
          multiline
          label="payment Status"
        /> */}
        <SelectInput source="payment_status" choices={[
        { id: "Paid", name: "Paid" },
        { id: "Pending", name: "Pending" },
      ]} />
        <TextInput source="policy_company_name" validate={[required()]} />
        <DateInput
          label="Policy expiry date"
          source="policy_expired_date"
          defaultValue={new Date()}
        />
        <TextInput source="policy_gross_amount" validate={[required()]} />
        <DateInput
          label="Policy expiry date"
          source="policy_issue_date"
          defaultValue={new Date()}
        />
        <TextInput source="policy_name" validate={[required()]} />
        <TextInput source="policy_net_amount" validate={[required()]} />
        <TextInput source="policy_no" validate={[required()]} />
        <TextInput source="partner_agent_employment_code" validate={[required()]} />
        <TextInput
          source="policy_payment_invoice_attachment"
          validate={[required()]}
        />
        <TextInput
          source="policy_payment_mode"
          multiline={true}
          label="policy_payment_mode"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
