//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// SFI PRIVATE BETA

// Add your routes here
router.post('/land-details-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var landDetailsAnswer = req.session.data['land-details-answer']

  // Check whether the variable matches a condition
  if (landDetailsAnswer == "yes"){
    // Send user to next page
    res.redirect('/sfi-private-beta/tasklist-2')

  } else {
    // Send user to ineligible page
    res.redirect('/sfi-private-beta/update-land-details')
  }

})

router.post('/management-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['management-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/sfi-private-beta/hefer')

  } else {
    // Send user to ineligible page
    res.redirect('/sfi-private-beta/ineligible')
  }

})

router.post('/hefer-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['hefer-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/sfi-private-beta/sssi')

  } else {
    // Send user to ineligible page
    res.redirect('/sfi-private-beta/ineligible')
  }

})

router.post('/sssi-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['sssi-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/sfi-private-beta/ite')

  } else {
    // Send user to ineligible page
    res.redirect('/sfi-private-beta/ineligible')
  }

})

router.post('/ite-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['ite-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/sfi-private-beta/public-body')

  } else {
    // Send user to ineligible page
    res.redirect('/sfi-private-beta/ineligible')
  }

})

router.post('/public-body-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['public-body-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/sfi-private-beta/eligible')

  } else {
    // Send user to ineligible page
    res.redirect('/sfi-private-beta/ineligible')
  }

})

router.post('/land-details-answer-ht', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var landDetailsAnswer = req.session.data['land-details-answer']

  // Check whether the variable matches a condition
  if (landDetailsAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-mvp/tasklist-2')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-mvp/update-land-details')
  }

})

router.post('/management-answer-ht', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['management-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-mvp/hefer')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-mvp/ineligible')
  }

})

router.post('/hefer-answer-ht', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['hefer-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-mvp/sssi')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-mvp/ineligible')
  }

})

router.post('/sssi-answer-ht', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['sssi-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-mvp/ite')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-mvp/ineligible')
  }

})

router.post('/ite-answer-ht', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['ite-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-mvp/public-body')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-mvp/ineligible')
  }

})

router.post('/public-body-answer-ht', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['public-body-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-mvp/eligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-mvp/ineligible')
  }

})


// HIGHER TIER CUSTOMER PHASE 2 // 

// Add your routes here
router.post('/land-details-answer-ht-p2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var landDetailsAnswer = req.session.data['land-details-answer']

  // Check whether the variable matches a condition
  if (landDetailsAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2/tasklist-2')

  } else if (landDetailsAnswer == "no"){
    res.redirect('/ht-phase-2/update-land-details')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2/check-land-details-error')
  }

})

router.post('/management-answer-ht-p2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['management-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2/hefer')

  } else if (managementControlAnswer == "no"){
    res.redirect('/ht-phase-2/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2/management-control-error')
  }

})

router.post('/hefer-answer-ht-p2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var heferAnswer = req.session.data['hefer-answer']

  // Check whether the variable matches a condition
  if (heferAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2/sssi')

  } else if (heferAnswer == "no"){
    res.redirect('/ht-phase-2/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2/hefer-error')
  }

})

router.post('/sssi-answer-ht-p2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var sssiAnswer = req.session.data['sssi-answer']

  // Check whether the variable matches a condition
  if (sssiAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2/eligible')

  } else if (sssiAnswer == "no"){
    res.redirect('/ht-phase-2/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2/sssi-error')
  }

})

router.post('/agreement-name-ht-p2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var agreementName = req.session.data['agreement-name']

  // Check whether the variable matches a condition
  if (!agreementName){
    // Send user to error if input field is empty
    res.redirect('/ht-phase-2/agreement-name-error')

  } else {
    // Send user to next page
    res.redirect('/ht-phase-2/tasklist-4')
  }


})// HIGHER TIER CUSTOMER PHASE 2 - DEV VIEW// 

// Add your routes here
router.post('/land-details-answer-ht-dev', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var landDetailsAnswer = req.session.data['land-details-answer']

  // Check whether the variable matches a condition
  if (landDetailsAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-dev/tasklist-2')

  } else if (landDetailsAnswer == "no"){
    res.redirect('/ht-phase-2-dev/update-land-details')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-dev/check-land-details-error')
  }

})

router.post('/management-answer-ht-dev', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['management-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-dev/hefer')

  } else if (managementControlAnswer == "no"){
    res.redirect('/ht-phase-2-dev/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-dev/management-control-error')
  }

})

router.post('/hefer-answer-ht-dev', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var heferAnswer = req.session.data['hefer-answer']

  // Check whether the variable matches a condition
  if (heferAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-dev/sssi')

  } else if (heferAnswer == "no"){
    res.redirect('/ht-phase-2-dev/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-dev/hefer-error')
  }

})

router.post('/sssi-answer-ht-dev', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var sssiAnswer = req.session.data['sssi-answer']

  // Check whether the variable matches a condition
  if (sssiAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-dev/eligible')

  } else if (sssiAnswer == "no"){
    res.redirect('/ht-phase-2-dev/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-dev/sssi-error')
  }

})

router.post('/agreement-name-ht-dev', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var agreementName = req.session.data['agreement-name']

  // Check whether the variable matches a condition
  if (!agreementName){
    // Send user to error if input field is empty
    res.redirect('/ht-phase-2-dev/agreement-name-error')

  } else {
    // Send user to next page
    res.redirect('/ht-phase-2-dev/tasklist-4')
  }

})

router.get('/confirmation', function (req, res) {
  res.render('confirmation');
});

router.get('/dashboard-withdraw-application', function (req, res) {
  res.render('dashboard-withdraw-application');
});



// HIGHER TIER CUSTOMER PHASE 2 - MOB VIEW// 

// Add your routes here
router.post('/land-details-answer-ht-mob', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var landDetailsAnswer = req.session.data['land-details-answer']

  // Check whether the variable matches a condition
  if (landDetailsAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-mob/first/tasklist-2')

  } else if (landDetailsAnswer == "no"){
    res.redirect('/ht-phase-2-mob/first/update-land-details')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-mob/first/check-land-details-error')
  }

})

router.post('/management-answer-ht-mob', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var managementControlAnswer = req.session.data['management-answer']

  // Check whether the variable matches a condition
  if (managementControlAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-mob/first/hefer')

  } else if (managementControlAnswer == "no"){
    res.redirect('/ht-phase-2-mob/first/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-mob/first/management-control-error')
  }

})

router.post('/hefer-answer-ht-mob', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var heferAnswer = req.session.data['hefer-answer']

  // Check whether the variable matches a condition
  if (heferAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-mob/first/sssi')

  } else if (heferAnswer == "no"){
    res.redirect('/ht-phase-2-mob/first/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-mob/first/hefer-error')
  }

})

router.post('/sssi-answer-ht-mob', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var sssiAnswer = req.session.data['sssi-answer']

  // Check whether the variable matches a condition
  if (sssiAnswer == "yes"){
    // Send user to next page
    res.redirect('/ht-phase-2-mob/first/eligible')

  } else if (sssiAnswer == "no"){
    res.redirect('/ht-phase-2-mob/first/ineligible')

  } else {
    // Send user to ineligible page
    res.redirect('/ht-phase-2-mob/first/sssi-error')
  }

})

router.post('/agreement-name-ht-mob', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var agreementName = req.session.data['agreement-name']

  // Check whether the variable matches a condition
  if (!agreementName){
    // Send user to error if input field is empty
    res.redirect('/ht-phase-2-mob/first/agreement-name-error')

  } else {
    // Send user to next page
    res.redirect('/ht-phase-2-mob/first/tasklist-4')
  }

})

router.get('/confirmation', function (req, res) {
  res.render('confirmation');
});

router.get('/dashboard-withdraw-application', function (req, res) {
  res.render('dashboard-withdraw-application');
});





// CAPITAL CLAIMS - STANDARD COST ITEMS COMPLETE ERROR
router.post('/capitals-standard-cost-complete', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var standardSectionComplete = req.session.data['haveYouCompletedThisSection']

  // Check whether the variable matches a condition
  if (standardSectionComplete == "yes"){
    // Send user to next page
    res.redirect('/capital-claims/tasklist-2')

  } else if (standardSectionComplete == "no"){
    res.redirect('/capital-claims/tasklist-1')

  } else {
    // Send user to ineligible page
    res.redirect('/capital-claims/standard-cost-items-error')
  }

})

// CAPITAL CLAIMS - ACTUAL COST ITEMS COMPLETE ERROR
router.post('/capitals-actual-cost-complete', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var actualSectionComplete = req.session.data['actualCostComplete']

  // Check whether the variable matches a condition
  if (actualSectionComplete == "yes"){
    // Send user to next page
    res.redirect('/capital-claims/tasklist-3')

  } else if (actualSectionComplete == "no"){
    res.redirect('/capital-claims/tasklist-2')

  } else {
    // Send user to ineligible page
    res.redirect('/capital-claims/actual-cost-items-error')
  }

})



// CAPITAL CLAIMS - Declarations ERROR
router.post('/capitals-declarations', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var declarations = req.session.data['declarations']

  // Check whether the variable matches a condition
  if (declarations == "yes"){
    // Send user to next page
    res.redirect('/capital-claims/tasklist-9')

  } else if (declarations == "no"){
    res.redirect('/capital-claims/declarations-no')

  } else {
    // Send user to ineligible page
    res.redirect('/capital-claims/declarations-error')
  }

})

// CAPITAL CLAIMS User Research //


// CAPITAL CLAIMS UR - STANDARD COST ITEMS COMPLETE ERROR
router.post('/capitals-ur-standard-cost-complete', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var standardSectionComplete = req.session.data['haveYouCompletedThisSection']

  // Check whether the variable matches a condition
  if (standardSectionComplete == "yes"){
    // Send user to next page
    res.redirect('/capital-claims-ur/tasklist-2')

  } else if (standardSectionComplete == "no"){
    res.redirect('/capital-claims-ur/tasklist-1')

  } else {
    // Send user to ineligible page
    res.redirect('/capital-claims-ur/standard-cost-items-error')
  }

})

// CAPITAL CLAIMS - ACTUAL COST ITEMS COMPLETE ERROR
router.post('/capitals-ur-actual-cost-complete', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var actualSectionComplete = req.session.data['actualCostComplete']

  // Check whether the variable matches a condition
  if (actualSectionComplete == "yes"){
    // Send user to next page
    res.redirect('/capital-claims-ur/tasklist-3')

  } else if (actualSectionComplete == "no"){
    res.redirect('/capital-claims-ur/tasklist-2')

  } else {
    // Send user to ineligible page
    res.redirect('/capital-claims-ur/actual-cost-items-error')
  }

})

// CAPITAL CLAIMS LV2 ADD INVOICE
router.post('/actual-cost-add-invoice', function (req, res) {
  // Get values from the form
  const rawAmount = req.body['amount-claimed'] || '0';
  const rawVat = req.body['vat-claimed'] || '0';

  // Clean and parse the values
  const amountClaimed = parseFloat(rawAmount.toString().replace(/[^0-9.]/g, '')) || 0;
  const vatClaimed = parseFloat(rawVat.toString().replace(/[^0-9.]/g, '')) || 0;

  const total = amountClaimed + vatClaimed;

  // Optional: log values for debugging
  console.log(`Amount: ${amountClaimed}, VAT: ${vatClaimed}, Total: ${total}`);

  // Redirect to error page if total exceeds £1200
  if (total > 1200) {
    return res.redirect('/capital-claims-ur/actual-cost-add-invoice-error');
  }

  // Otherwise, continue to the next step
  return res.redirect('/capital-claims-ur/actual-cost-lv2-saved'); // Replace with your actual next page
});





// CAPITAL CLAIMS - Public funding ERROR
router.post('/capitals-funding', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var publicFunding = req.session.data['funding']
  var publicConditional = req.session.data ['public-conditional-comments-yes']

  // Check whether the variable matches a condition
  if (!publicFunding) {
  // User has not selected anything
    res.redirect('/capital-claims-ur/public-funding-error');
  }
  if (publicFunding === "yes" && !publicConditional) {
    res.redirect('/capital-claims-ur/public-funding-text-error');
  
  } else {
    // Send user to tasklist
    res.redirect('/capital-claims-ur/tasklist-6')
  }

  })

// CAPITAL CLAIMS - Declarations ERROR
router.post('/capitals-ur-declarations', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var declarations = req.session.data['declarations']

  // Check whether the variable matches a condition
  if (declarations == "yes"){
    // Send user to next page
    res.redirect('/capital-claims-ur/tasklist-9')

  } else if (declarations == "no"){
    res.redirect('/capital-claims-ur/declarations-no')

  } else {
    // Send user to ineligible page
    res.redirect('/capital-claims-ur/declarations-error')
  }

})