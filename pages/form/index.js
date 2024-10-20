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
  const [isFormValid, setIsFormValid] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('Upload Profile Pic');

  useEffect(() => {
    document.body.style.backgroundColor = '#000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const newValues = useExistingData ? { ...initialData, image: imageUploaded ? values.image : initialData.image } : {
      name: '',
      fathers_name: '',
      _id: '',
      email: '',
      phone: '',
      batch: '',
      cgpi: '',
      class_rank: '',
      branch_rank: '',
      year_rank: '',
      skills: '',
      portfolio: '',
      education10: '',
      education12: '',
      about: '',
      address: '',
      image: values.image || '',
      github: '',
      linkedin: ''
    };
    setValues(newValues);
    validateForm(newValues);

    // Update file upload button text based on existing value
    if (useExistingData && initialData.image) {
      setFileName('Upload Another Image');
    } else if (!useExistingData && !imageUploaded) {
      setFileName('Upload Profile Image');
    }
  }, [useExistingData, initialData, setValues, imageUploaded]);

  const handleCheckboxChange = () => {
    setUseExistingData(!useExistingData);
  };

  const validateForm = (values) => {
    const requiredFields = ['phone', 'skills', 'portfolio', 'education10', 'education12', 'about', 'address', 'image', 'github', 'linkedin'];
    const isValid = requiredFields.every(field => values[field] && String(values[field]).trim() !== '');
    setIsFormValid(isValid);
  };

  const handleFieldChange = (e) => {
    handleChange(e);
    validateForm({ ...values, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_API, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Error uploading file to Cloudinary');
        }

        const data = await response.json();
        const imageUrl = data.secure_url;
        setValues(prevValues => ({ ...prevValues, image: imageUrl }));
        setImageUploaded(true);
        validateForm({ ...values, image: imageUrl });

        // Set truncated file name
        setFileName('Upload Another Image');
      } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  useEffect(() => {
    validateForm(values);
  }, [values]);

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
                    <div className="file-upload-wrapper">
                      <label htmlFor="file-upload" className="custom-file-upload">
                        {isUploading ? 'Uploading...' : fileName}
                      </label>
                      <input id="file-upload" type="file" className="app-form-control file-input" onChange={handleFileChange} disabled={isUploading} />
                    </div>
                    <Field className="app-form-control" placeholder="Github Profile" name="github" onChange={handleFieldChange} />
                    <Field className="app-form-control" placeholder="Linkedin Profile" name="linkedin" onChange={handleFieldChange} />
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <label className='autofill-label'>
                      <Field type="checkbox" className="autofill-checkbox" name="useExistingData" checked={useExistingData} onChange={handleCheckboxChange} />
                      Auto-fill with Existing Data
                    </label>
                    <Field className="app-form-control readonly-field" placeholder="NAME" name="name" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Father's Name" name="fathers_name" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Roll no" name="_id" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Email" name="email" type="email" readOnly />
                    <Field className="app-form-control" placeholder="Phone no" name="phone" onChange={handleFieldChange} />
                    <Field className="app-form-control readonly-field" placeholder="Batch" name="batch" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="CGPA" name="cgpi" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Class Rank" name="class_rank" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Branch Rank" name="branch_rank" readOnly />
                    <Field className="app-form-control readonly-field" placeholder="Year Rank" name="year_rank" readOnly />
                    <Field className="app-form-control" placeholder="Skills (comma separated)" name="skills" onChange={handleFieldChange} />
                    <Field className="app-form-control" placeholder="Personal Website" name="portfolio" onChange={handleFieldChange} />
                    <Field className="app-form-control" placeholder="10th Education" name="education10" onChange={handleFieldChange} />
                    <Field className="app-form-control" placeholder="12th Education" name="education12" onChange={handleFieldChange} />
                    <Field className="app-form-control" placeholder="About" name="about" onChange={handleFieldChange} />
                    <Field className="app-form-control" placeholder="Address" name="address" onChange={handleFieldChange} />
                    <div className="app-form-group buttons">
                      <button className={`app-form-button ${!isFormValid ? 'disabled' : ''}`} type="submit" disabled={!isFormValid}>Submit</button>
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