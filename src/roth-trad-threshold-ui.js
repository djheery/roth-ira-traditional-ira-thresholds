const ThresholdUI = (() => {
  const selectors = {
    pageContainer: document.querySelector('.bacc__page-container'),
    selectContainers: Array.from(document.querySelectorAll('#bacc__select-container')),
    rothTable: document.querySelector('.roth-thresholds'),
    tradTable: document.querySelector('.trad-thresholds'),
    tradMarriageSeperateTable: document.querySelector('.trad-marriage-seperate'),
    linkWidget: document.querySelector('.bacc__link-widget')
  }

  return {
    getSelectors: () => {return selectors},
    changeTable: (e) => {
      if(!e.target.classList.contains('select-box')) return
      if(e.target.classList.contains('roth')) ThresholdUI.RothThresholds(e.target.options[e.target.selectedIndex].value)
      if(e.target.classList.contains('trad')) ThresholdUI.TraditionalThresholds(e.target.options[e.target.selectedIndex].value)
    },
    RothThresholds: (option) => {
      if(option === '21-22') thresh = RothTradThresholds.getThresholds('21-22')
      if(option === '20-21') thresh = RothTradThresholds.getThresholds('20-21')
        selectors.rothTable.innerHTML = `
        <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Single Filers (MAGI)</th>
            <th class="table-heading">Married Filing Jointly (MAGI)</th>
            <th class="table-heading">Married Filing Seperately (MAGI)</th>
            <th class="table-heading">Maximum Contributribution for Individuals Under Age 50</th>
            <th class="table-heading">Maximum Contributribution for Individuals Age 50 and Over</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td>under $${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshOne)}</td>
            <td>under $${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshOne)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshOne)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshOne)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshOne)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshTwo)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshTwo)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshTwo)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshTwo)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshTwo)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshThree)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshThree)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshThree)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshThree)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshThree)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshFour)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshFour)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshFour)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshFour)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshFour)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshFive)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshFive)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshFive)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshFive)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshFive)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshSix)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshSix)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshSix)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshSix)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshSix)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshSeven)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshSeven)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshSeven)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshSeven)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshSeven)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshEight)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshEight)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshEight)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshEight)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshEight)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshNine)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshNine)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshNine)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshNine)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshNine)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshTen)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshTen)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshTen)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshTen)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshTen)}</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.singleThreshold.threshEleven)} & Over</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedJointThreshold.threshEleven)} & Over</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.marriedSeperateThreshold.threshEleven)} & Over</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContUnderFifty.threshEleven)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.rothIRA.maxContOverFifty.threshEleven)}</td>
          </tr>
        </tbody>
      </table>
        `
      },
    TraditionalThresholds: (option) => {
      let thresh;
      if(option === '21-22') thresh = RothTradThresholds.getThresholds('21-22');      
      if(option === '20-21') thresh = RothTradThresholds.getThresholds('20-21');
        selectors.tradTable.innerHTML = `
        <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Single Filers (MAGI)</th>
            <th class="table-heading">Married Filing Jointly (MAGI)*</th>
            <th class="table-heading">Married Filing Jointly (MAGI)**</th>
            <th class="table-heading">Allowable Deduction for individuals Under Age 50</th>
            <th class="table-heading">Allowable Deduction for Individuals Age 50 and Over</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td>under $${ThresholdUI.numberWithCommas(thresh.tradIRA.singleThreshold.threshOne)}</td>
            <td>under $${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointOne.threshOne)}</td>
            <td>under $${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointTwo.threshOne)}</td>                
            <td>$${ThresholdUI.numberWithCommas(thresh.tradIRA.deductionUnderFifty.threshOne)}</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.tradIRA.deductionOverFifty.threshOne)}</td>
          </tr>
          <tr class="table-data-row">
            <td>Between $${ThresholdUI.numberWithCommas(thresh.tradIRA.singleThreshold.threshOne)} & $${ThresholdUI.numberWithCommas(thresh.tradIRA.singleThreshold.threshTwo)}</td>
            <td>Between $${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointOne.threshOne)} & $${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointOne.threshTwo)}</td>
            <td>Between $${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointTwo.threshOne)} & $${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointTwo.threshTwo)}</td>                
            <td>A partial deduction based on your MAGI</td>
            <td>A partial deduction based on your MAGI</td>
          </tr>
          <tr class="table-data-row">
            <td>$${ThresholdUI.numberWithCommas(thresh.tradIRA.singleThreshold.threshTwo)} or more</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointOne.threshTwo)} or more</td>
            <td>$${ThresholdUI.numberWithCommas(thresh.tradIRA.marriageJointTwo.threshTwo)} or more</td>                
            <td>No Deduction</td>
            <td>No deduction</td>
          </tr>
        </tbody>
      </table>
        `
    },
    numberWithCommas: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
})()