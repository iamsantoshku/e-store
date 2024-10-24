// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

// import SummaryApi from '../../common';
// import { toast } from 'react-toastify';

// import { setUserDetails } from '../../store/userSlice';

// const Profile = () => {
//   const dispatch = useDispatch();
//   const userInfo = useSelector(state => state?.user?.user); // Get user info from Redux store
//   const [user, setUser] = useState(userInfo);
//   const [updatedUser, setUpdatedUser] = useState({});
//   const [loading, setLoading] = useState(true);

//   // Fetch user details from the backend
//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios({
//         method: SummaryApi.current_user.method,
//         url: SummaryApi.current_user.url,
//         withCredentials: true, // Include credentials for authentication
//       });

//       console.log('User Details API Response:', response); // Log response for debugging

//       if (response?.data?.success) {
//         setUser(response.data.user);
//         setUpdatedUser(response.data.user);
//         dispatch(setUserDetails(response.data.user)); // Store user details in Redux
//         toast.success("User details fetched successfully.");
//       } else {
//         toast.error("Failed to fetch user details.");
//       }
//     } catch (error) {
//       toast.error("Error fetching user details.");
//       console.error("Error fetching user details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!userInfo) {
//       fetchUserDetails(); // Fetch details only if not available in Redux
//     } else {
//       setUser(userInfo);
//       setUpdatedUser(userInfo);
//       setLoading(false);
//     }
//   }, [userInfo]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <div>No user details found.</div>;
//   }

//   return (
//     <div className='p-4'>
//       <h2 className='text-xl font-bold'>Profile</h2>
//       <div className='mt-4'>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Name:</label>
//           <input
//             type='text'
//             value={updatedUser.name || ''}
//             className='border p-2 rounded w-full'
//             onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Email:</label>
//           <input
//             type='email'
//             value={updatedUser.email || ''}
//             className='border p-2 rounded w-full'
//             readOnly
//           />
//         </div>
//         <div className='mb-4'>
//           <label className='block text-gray-700'>Phone:</label>
//           <input
//             type='text'
//             value={updatedUser.phone || ''}
//             className='border p-2 rounded w-full'
//             onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })}
//           />
//         </div>
//         <div className='flex gap-4'>
//           <button
//             className='bg-blue-500 text-white px-4 py-2 rounded'
//             onClick={async () => {
//               try {
//                 const response = await axios({
//                   method: SummaryApi.updateUser.method,
//                   url: SummaryApi.updateUser.url,
//                   data: updatedUser,
//                   withCredentials: true,
//                 });

//                 if (response?.data?.success) {
//                   setUser(response.data.user);
//                   dispatch(setUserDetails(response.data.user));
//                   toast.success("Profile updated successfully.");
//                 } else {
//                   toast.error("Failed to update profile.");
//                 }
//               } catch (error) {
//                 toast.error("Error updating profile.");
//                 console.error("Error updating profile:", error);
//               }
//             }}
//           >
//             Save Changes
//           </button>
//           <button
//             className='bg-red-500 text-white px-4 py-2 rounded'
//             onClick={() => setUpdatedUser(user)} // Reset changes
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

// import SummaryApi from '../../common';
// import { toast } from 'react-toastify';
// // import { setUserDetails } from '../store/userSlice';
// import { setUserDetails } from '../../store/userSlice';

// const Profile = () => {
//   const dispatch = useDispatch();
//   const userInfo = useSelector(state => state?.user?.user);
//   const [user, setUser] = useState(userInfo);
//   const [updatedUser, setUpdatedUser] = useState({});
//   const [loading, setLoading] = useState(true);

//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios({
//         method: SummaryApi.current_user.method,
//         url: SummaryApi.current_user.url,
//         withCredentials: true,
//       });

//       if (response?.data?.success) {
//         setUser(response.data.user);
//         setUpdatedUser(response.data.user);
//         dispatch(setUserDetails(response.data.user));
//         toast.success("User details fetched successfully.");
//       } else {
//         toast.error("Failed to fetch user details.");
//       }
//     } catch (error) {
//       toast.error("Error fetching user details.");
//       console.error("Error fetching user details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!userInfo) {
//       fetchUserDetails();
//     } else {
//       setUser(userInfo);
//       setUpdatedUser(userInfo);
//       setLoading(false);
//     }
//   }, [userInfo]);

//   if (loading) {
//     return <div className="flex justify-center items-center h-64">Loading...</div>;
//   }

//   if (!user) {
//     return <div className="text-center py-10 text-gray-500">No user details found.</div>;
//   }

//   return (
//     <div className='p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg'>
//       <h2 className='text-2xl font-bold text-gray-800 mb-6'>Profile</h2>
//       <div className='space-y-6'>
//         <div className=''>
//           <label className='block text-sm font-medium text-gray-600'>Name:</label>
//           <input
//             type='text'
//             value={updatedUser.name || ''}
//             className='mt-1 border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
//             onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
//           />
//         </div>

//         <div className=''>
//           <label className='block text-sm font-medium text-gray-600'>Email:</label>
//           <input
//             type='email'
//             value={updatedUser.email || ''}
//             className='mt-1 border border-gray-300 p-3 rounded-lg w-full bg-gray-100 cursor-not-allowed'
//             readOnly
//           />
//         </div>

//         <div className=''>
//           <label className='block text-sm font-medium text-gray-600'>Phone:</label>
//           <input
//             type='text'
//             value={updatedUser.phone || ''}
//             className='mt-1 border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
//             onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })}
//           />
//         </div>

//         <div className='flex gap-4 mt-4'>
//           <button
//             className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300'
//             onClick={async () => {
//               try {
//                 const response = await axios({
//                   method: SummaryApi.updateUser.method,
//                   url: SummaryApi.updateUser.url,
//                   data: updatedUser,
//                   withCredentials: true,
//                 });

//                 if (response?.data?.success) {
//                   setUser(response.data.user);
//                   dispatch(setUserDetails(response.data.user));
//                   toast.success("Profile updated successfully.");
//                 } else {
//                   toast.error("Failed to update profile.");
//                 }
//               } catch (error) {
//                 toast.error("Error updating profile.");
//                 console.error("Error updating profile:", error);
//               }
//             }}
//           >
//             Save Changes
//           </button>
//           <button
//             className='bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400 transition duration-300'
//             onClick={() => setUpdatedUser(user)}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
 import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../../store/userSlice';


import { FaUser, FaAddressCard, FaClipboardList, FaGift, FaCreditCard, FaMoneyCheckAlt } from 'react-icons/fa';



const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state?.user?.user);
  const [user, setUser] = useState(userInfo);
  const [updatedUser, setUpdatedUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  });
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState({
    personalInfo: false,
    email: false,
    phone: false,
  });

  const fetchUserDetails = async () => {
    try {
      const response = await axios({
        method: SummaryApi.current_user.method,
        url: SummaryApi.current_user.url,
        withCredentials: true,
      });

      if (response?.data?.success) {
        const { name, email, phone, gender } = response.data.user;
        const [firstName, lastName] = name.split(' ');

        setUser({
          firstName,
          lastName,
          email,
          phone,
          gender,
        });

        setUpdatedUser({
          firstName,
          lastName,
          email,
          phone,
          gender,
        });

        dispatch(setUserDetails(response.data.user));
        toast.success("User details fetched successfully.");
      } else {
        toast.error("Failed to fetch user details.");
      }
    } catch (error) {
      toast.error("Error fetching user details.");
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      fetchUserDetails();
    } else {
      const { name, email, phone, gender } = userInfo;
      const [firstName, lastName] = name.split(' ');

      setUser({
        firstName,
        lastName,
        email,
        phone,
        gender,
      });

      setUpdatedUser({
        firstName,
        lastName,
        email,
        phone,
        gender,
      });

      setLoading(false);
    }
  }, [userInfo]);

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleSave = (field) => {
    setUser(updatedUser);
    setIsEditing((prev) => ({
      ...prev,
      [field]: false,
    }));
    toast.success("Profile updated successfully.");
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center py-10 text-gray-500">No user details found.</div>;
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-b from-white to-gray-100 p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 rounded-full p-2 mr-4">
            <FaUser className="text-white text-3xl" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Hello,</p>
            <p className="text-xl font-bold text-gray-800">{user.firstName} {user.lastName}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
              <FaClipboardList className="mr-2 text-blue-500" /> MY ORDERS
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaClipboardList className="mr-2" /> Order History
              </li>
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaClipboardList className="mr-2" /> Track Orders
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
              <FaAddressCard className="mr-2 text-blue-500" /> ACCOUNT SETTINGS
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaAddressCard className="mr-2" /> Profile Information
              </li>
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaAddressCard className="mr-2" /> Manage Addresses
              </li>
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaAddressCard className="mr-2" /> PAN Card Information
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
              <FaCreditCard className="mr-2 text-blue-500" /> PAYMENTS
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaGift className="mr-2" /> Gift Cards
              </li>
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaMoneyCheckAlt className="mr-2" /> Saved UPI
              </li>
              <li className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <FaCreditCard className="mr-2" /> Saved Cards
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Profile Section */}
      <div className="w-3/4 bg-white p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
          <button
            className="text-blue-600 hover:underline"
            onClick={() => handleEditToggle('personalInfo')}
          >
            {isEditing.personalInfo ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-500">First Name</label>
            <input
              type="text"
              name="firstName"
              value={updatedUser.firstName}
              onChange={handleChange}
              className={`mt-1 border ${isEditing.personalInfo ? 'border-gray-300' : 'border-transparent'} p-3 rounded-lg w-full bg-gray-100`}
              readOnly={!isEditing.personalInfo}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={updatedUser.lastName}
              onChange={handleChange}
              className={`mt-1 border ${isEditing.personalInfo ? 'border-gray-300' : 'border-transparent'} p-3 rounded-lg w-full bg-gray-100`}
              readOnly={!isEditing.personalInfo}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className={`mt-1 border ${isEditing.personalInfo ? 'border-gray-300' : 'border-transparent'} p-3 rounded-lg w-full bg-gray-100`}
              readOnly={!isEditing.personalInfo}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              onChange={handleChange}
              className={`mt-1 border ${isEditing.personalInfo ? 'border-gray-300' : 'border-transparent'} p-3 rounded-lg w-full bg-gray-100`}
              readOnly={!isEditing.personalInfo}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Gender</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={updatedUser.gender === 'male'}
                  onChange={handleGenderChange}
                  disabled={!isEditing.personalInfo}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={updatedUser.gender === 'female'}
                  onChange={handleGenderChange}
                  disabled={!isEditing.personalInfo}
                />
                <span>Female</span>
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={updatedUser.gender === 'other'}
                  onChange={handleGenderChange}
                  disabled={!isEditing.personalInfo}
                />
                <span>Other</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
