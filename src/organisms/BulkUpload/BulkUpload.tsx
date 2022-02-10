// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Formik } from 'formik';
// import PerfectScrollbar from 'react-perfect-scrollbar';

// import EditIcon from '../../icons/EditIcon';

// // import {
// //   deleteMastersCustomer,
// //   resetCustomerMapHeader,
// //   retrieveCustomerMapHeaders,
// //   uploadCustomerFile,
// // } from '@store/masters/actions';
// // import { addNewCustomerMapHeader } from '@store/masters/actions';
// // import { RootState } from '@store/store';

// import { convertTableToExcel } from './xlsxParser';
// const XlsxParse = await import('./xlsxParser');

// // import Table from '../components/Table';
// import Alert from './Alert';
// import BulkUploadHeader from './BulkUploadHeader';
// import ProgressSteps from './ProgressSteps';
// import UploadFile from './UploadFile';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     height: '100%',
//     backgroundColor: theme.palette.primary.contrastText,
//   },
//   successAlert: {
//     paddingBottom: 16,
//     width: '100%',
//   },
// }));

// const Customer = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   //const router = useRouter();
//   React.useEffect(() => {
//     dispatch(retrieveCustomerMapHeaders({}));
//   }, []);
//   const [step, setStep] = React.useState<number>(0);
//   const [headerMapped, setHeaderMapped] = React.useState<any>(false);
//   const [nextButtonProps, setNextButtonProps] = React.useState<object>({ disabled: true });
//   const [mapButtonProps, setMapButtonProps] = React.useState<object>({ disabled: false });
//   const handleMapHeaderSaved = () => {
//     setHeaderMapped(true);
//     setMapButtonProps({ ...mapButtonProps, leftIcon: <EditIcon /> });
//   };
//   // total no of rows to be uploaded
//   const [total, setTotal] = React.useState(0);
//   const data = useSelector((state: any) => state.masters.customerMapHeaders);
//   const errorTableData = useSelector((state: any) => state.masters.customersErrorData);
//   const ids = useSelector((state: RootState) => state.masters.customerIds);
//   const initialValues: any = {};
//   data.fixed.forEach((item: any) => (initialValues[item.key] = item.column_name));
//   const handleDelete = (ids: any) => {
//     if ((ids as any[]).length > 0) dispatch(deleteMastersCustomer({ ids }));
//     setMapButtonProps({ ...mapButtonProps, disabled: false });
//     setNextButtonProps({
//       ...nextButtonProps,
//       disabled: true,
//     });
//   };

//   const onUploadComplete = (file: any) => {
//     XlsxParse.default(file).then((r:any) => {
//       setTotal(r.length);
//       dispatch(uploadCustomerFile(r));
//     });
//     setMapButtonProps({ ...mapButtonProps, disabled: true });
//     setNextButtonProps({
//       ...nextButtonProps,
//       disabled: false,
//       onClick: () => {
//         setStep(2);
//         setMapButtonProps({ style: { display: 'none' } });
//         setNextButtonProps({
//           text: 'Close',
//           color: 'success',
//           rightIcon: null,
//           disabled: false,
//           onClick: () => router.push('/settings/masters/customers'),
//         });
//       },
//     });
//   };

//   const handleReset = () => {
//     dispatch(resetCustomerMapHeader({}));
//     setHeaderMapped(false);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       enableReinitialize
//       onSubmit={(values) => {
//         const newData = JSON.parse(JSON.stringify(data));
//         newData.fixed.forEach((item: any) => (item.column_name = values[item.key]));
//         newData.dynamic = values.dynamic;
//         dispatch(addNewCustomerMapHeader(newData));
//       }}
//     >
//       <>
//         <BulkUploadHeader
//           data={data}
//           text="Settings"
//           links={[
//             {
//               name: 'Master',
//               // url: 'https://www.google.com',
//             },
//             {
//               name: 'Customer',
//               url: '/settings/masters/customers',
//             },
//           ]}
//           nextButtonProps={nextButtonProps}
//           mapHeaderButtonProps={mapButtonProps}
//           setMapHeaderSaved={handleMapHeaderSaved}
//         />
//         <PerfectScrollbar style={{ height: 'calc(100% - 88px)' }}>
//           <div className={classes.root}>
//             <div style={{ margin: '20px 0' }}>
//               <ProgressSteps activeStep={step} />
//             </div>
//             {step === 0 ? (
//               <UploadFile
//                 mapHeader={data}
//                 headerMapped={headerMapped}
//                 setMapHeaderSaved={handleMapHeaderSaved}
//                 onUploadComplete={onUploadComplete}
//                 onReset={handleReset}
//                 ids={ids}
//                 onDelete={handleDelete}
//               />
//             ) : (
//               <>
//                 <div className={classes.successAlert}>
//                   <Alert status="success" uploadedFiles={total - errorTableData.length} />
//                 </div>
//                 {errorTableData.length ? (
//                   <>
//                     <Alert
//                       status="warning"
//                       downloadFile={() =>
//                         convertTableToExcel(Object.keys(errorTableData[0]), errorTableData)
//                       }
//                     />
//                     <div style={{ height: 'calc(100% - 212px)' }}>
//                       <Table
//                         headings={
//                           errorTableData.length
//                             ? Object.keys(errorTableData[0]).map((item: string) => ({
//                                 title: item,
//                                 fieldName: item,
//                                 // sortable: true,
//                               }))
//                             : []
//                         }
//                         data={errorTableData}
//                       />
//                     </div>
//                   </>
//                 ) : (
//                   ''
//                 )}
//               </>
//             )}
//           </div>
//         </PerfectScrollbar>
//       </>
//     </Formik>
//   );
// };

// export default Customer;



export {};