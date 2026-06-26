//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// DECLARATIONS

// New land routing
router.post('/new-land-routing', function (req, res) {

  const answer = req.body['new-land-answer']

  if (answer === 'yes') {
    res.redirect('/declarations/tasklist-4')

  } else if (answer === 'no') {
    res.redirect('/declarations/tasklist-5')

  } else {
    // No answer selected → show error
    res.render('/declarations/new-land', {
      error: true
    })
  }

})

// Rotational declaration routing
router.post('/rotational-declaration-routing', function (req, res) {

  const answer = req.body['rotational-declaration-answer']
  const from = req.body['from']

  // No selected
  if (answer === 'no') {
    return res.redirect('/declarations/submit-rotational-declaration-2')
  }

  // Coming from Check Your Answers
  if (from === 'check-answers') {
    return res.redirect('/declarations/check-your-answers')
  }

  // Yes selected in normal journey
  if (answer === 'yes') {
    return res.redirect('/declarations/tasklist-1')
  }

  // Nothing selected
  res.render('/declarations/rotational-action-declaration', {
    error: true
  })

})

// Annual declaration routing
router.post("/annual-declaration-routing", function (req, res) {
  const answer = req.body["annual-declaration-answer"];

  if (!answer) {
    // No option selected → show error
    res.render("/declarations/annual-declaration", {
      error: true,
    });
  } else if (answer === "no") {
    res.redirect("/declarations/negative-declaration");
  } else if (answer === "yes") {
    res.redirect("/declarations/confirm-declaration");
  }
});

router.post("/declarations/confirm-declaration", function (req, res) {

  const raw = req.body['confirm[]'] || req.body.confirm || []
  const selected = Array.isArray(raw) ? raw : [raw]

  const allChecked =
    selected.includes("confirm-1") &&
    selected.includes("confirm-2") &&
    selected.includes("confirm-3")

  if (!allChecked) {
    return res.render("declarations/confirm-declaration", {
      error: true,
      data: { confirm: selected }
    })
  }

  res.redirect("/declarations/positive-submitted")

})

router.post("/declarations/submit-rotational-declaration-new", function (req, res) {

  const raw = req.body['confirm[]'] || req.body.confirm || []
  const selected = Array.isArray(raw) ? raw : [raw]

  const allChecked =
    selected.includes("confirm-1") &&
    selected.includes("confirm-2") &&
    selected.includes("confirm-3") &&
    selected.includes("confirm-4") &&
    selected.includes("confirm-5") &&
    selected.includes("confirm-6")

  if (!allChecked) {
    return res.render("declarations/submit-rotational-declaration-new", {
      error: true,
      data: { confirm: selected }
    })
  }

  res.redirect("/declarations/rotational-confirmation")

})

// SFI 26 TESTING

router.get('/sfi-26-testing/select-map', function (req, res) {

  // Reset every time user FIRST lands on page
  if (!req.query.fromLand) {
    req.session.data['landSelected'] = false;
  }

  res.render('sfi-26-testing/select-map');

});


router.post("/sfi-26-testing/select-actions", function (req, res) {
  const from = req.body.from;

  if (from === "check-answers") {
    return res.redirect("/sfi-26-testing/check-your-answers");
  }

  return res.redirect("/sfi-26-testing/tasklist-5");
});


router.post("/sfi-26-testing/select-map", function (req, res) {

  const from = req.body.from;
  const landSelected = req.session.data['landSelected'];

  // ✅ PRIORITY: if from check answers → always go back there
  if (from === "check-answers") {
    return res.redirect("/sfi-26-testing/check-your-answers");
  }

  // ✅ Normal journey logic
  if (landSelected) {
    return res.redirect("/sfi-26-testing/tasklist-6");
  }

  // ✅ If NOT selected → go back a step
  return res.redirect("/sfi-26-testing/tasklist-5");

});



router.post('/sfi-26-testing/select-land', function (req, res) {
  req.session.data['landSelected'] = true;
  res.redirect('/sfi-26-testing/select-map?fromLand=true');
});

router.post('/sfi-26-testing/select-land-parcel-1', function (req, res) {
  req.session.data['landSelected'] = true;
  res.redirect('/sfi-26-testing/select-map?fromLand=true');
});

router.post('/sfi-26-testing/select-land-parcel-2', function (req, res) {
  req.session.data['landSelected'] = true;
  res.redirect('/sfi-26-testing/select-map?fromLand=true');
});


router.post("/sfi-26-testing/land-details-answer-26", function (req, res) {
  const answer = req.body["land-details-answer-26"];
  const from = req.body.from;

  if (!answer) {
    return res.render("/sfi-26-testing/check-land-details", { error: true });
  }

  req.session.data["land-details-answer-26"] = answer;

  if (from && from === "check-answers") {
    return res.redirect("/sfi-26-testing/check-your-answers");
  }

  if (answer === "yes") {
    return res.redirect("/sfi-26-testing/tasklist-2");
  }

  return res.redirect("/sfi-26-testing/update-land-details");
});



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

router.post("/management-answer-sfi26", function (req, res) {
  const answer = req.body["management-answer"];
  const from = req.body.from;

  if (!answer) {
    return res.render("sfi-26-testing/management-control", {
      error: true,
    });
  }

  req.session.data["management-answer"] = answer;

  // If coming from check answers, return there
  if (from === "check-answers") {
    return res.redirect("/sfi-26-testing/check-your-answers");
  }

  // Normal journey
  if (answer === "yes") {
    return res.redirect("/sfi-26-testing/hefer");
  }

  return res.redirect("/sfi-26-testing/ineligible");
});


router.post("/hefer-answer-26", function (req, res) {
  // Read the current submitted value
  const answer = req.body["hefer-answer"];

  // If nothing selected → show error
  if (!answer) {
    return res.render("sfi-26-testing/hefer", {
      error: true,
    });
  }

  // Store the answer once it's valid
  req.session.data["hefer-answer"] = answer;

  if (answer === "yes") {
    return res.redirect("/sfi-26-testing/sssi");
  }

  return res.redirect("/sfi-26-testing/ineligible");
});


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

router.post("/sssi-answer-26", function (req, res) {
  // Read the current submitted value
  const answer = req.body["sssi-answer"];

  // If nothing selected → show error
  if (!answer) {
    return res.render("sfi-26-testing/sssi", {
      error: true,
    });
  }

  // Store the answer once it's valid
  req.session.data["hefer-answer"] = answer;

  if (answer === "yes") {
    return res.redirect("/sfi-26-testing/eligible");
  }

  return res.redirect("/sfi-26-testing/ineligible");
});


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