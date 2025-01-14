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

})