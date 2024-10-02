import { withFormik, Form, Field } from 'formik';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ERROR_MSG = 'Oops! Something went wrong 🤷‍♂️';

const updateData = async ({ url, options }) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(ERROR_MSG);
  }
  return response.json();
};

// Converting comma separated skills to list
const processSkills = (skills) => {
  if (typeof skills === 'string') {
    return skills.split(',').map(skill => skill.trim());
  }
  return skills;
};

const InnerForm = ({ values, handleChange, handleSubmit, setValues, initialData }) => {
  const router = useRouter();
  const [useExistingData, setUseExistingData] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    if (useExistingData) {
      setValues(initialData);
    } else {
      setValues({
        name: '',
        _id: '',
        email: '',
        phone: '',
        semester: '',
        cgpa: '',
        skills: '',
        portfolio: '',
        education10: '',
        education12: '',
        about: '',
        image: '',
        github: '',
        linkedin: ''
      });
    }
  }, [useExistingData, initialData, setValues]);

  const handleCheckboxChange = () => {
    setUseExistingData(!useExistingData);
  };

  return (
    <div className="flex text-white justify-around mainForm">
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>Registration</span>
                    <span>Form</span>
                  </div>
                  <div className="upload_title">
                    <Field className="app-form-control" placeholder="Profile Photo Hosted Link" name="image" />
                    <Field className="app-form-control" placeholder="Github Profile" name="github" />
                    <Field className="app-form-control" placeholder="Linkedin Profile" name="linkedin" />
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <label className='autofill-label'>
                      <Field type="checkbox" className="autofill-checkbox" checked={useExistingData} onChange={handleCheckboxChange} />
                      Auto-fill with Existing Data
                    </label>
                    <Field className="app-form-control readonly-field" placeholder="NAME" name="name" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Roll_no" name="_id" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Email" name="email" type="email" readOnly />
                    <Field className="app-form-control" placeholder="Phone no" name="phone"/>
                    <Field className="app-form-control readonly-field" placeholder="Semester" name="semester" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="CGPA" name="cgpa" readOnly />
                    <Field className="app-form-control" placeholder="Skills (comma separated)" name="skills" />
                    <Field className="app-form-control" placeholder="Personal Website" name="portfolio" />
                    <Field className="app-form-control" placeholder="10th Education" name="education10" />
                    <Field className="app-form-control" placeholder="12th Education" name="education12" />
                    <Field className="app-form-control" placeholder="About" name="about" />
                    <div className="app-form-group buttons">
                      <button className="app-form-button" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyForm = withFormik({
  mapPropsToValues: ({ initialData }) => ({
    ...initialData,
  }),
  validate: (values) => {
    const errors = {};
    return errors;
  },
  handleSubmit: async (values, { props }) => {
    const processedValues = {
      ...values,
      skills: processSkills(values.skills),
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(processedValues),
      headers: { 'Content-Type': 'application/json' },
    };
    console.log('body', options.body);
    await updateData({ url: `/api/updateStudent?id=${values._id}`, options });
    props.router.push(`/student/${values._id}`);
  },
})(InnerForm);

function AuthForm() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn('google', { callbackUrl: `${process.env.GOOGLE_ID}/form` });
    } else if (status === 'authenticated') {
      // Fetch initial data
      const fetchInitialData = async () => {
        const response = await fetch(`/api/fetchStudentById?id=${session.user.email.split('@')[0]}`);
        const data = await response.json();
        setInitialData(data);
      };
      fetchInitialData();
    }
  }, [status]);

  if (status === 'authenticated' && initialData) {
    return (
      <div>
        <MyForm initialData={initialData} router={router} />
      </div>
    );
  }

  return null;
}

export default AuthForm;