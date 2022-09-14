import { useEffect,useState } from 'react';
import './App.css';
import Loader from './Components/Loader';
import LoadingBar from 'react-top-loading-bar'
import Navbar from './Components/Navbar';

function App() {
  document.body.style.backgroundColor='white';
  const[symbol,updateSymbol]=useState("");
  const[bool,updatebool]=useState(false);
  const[loading,setloading]=useState(0);


  async function getsymbol(){
    let getsys=await fetch("https://api.exchangerate.host/symbols");
    let parsedData=await getsys.json();
    let tempsymbol=await parsedData.symbols;
    updateSymbol(tempsymbol); 
    updatebool(true);
  }

useEffect(()=>{
  getsymbol();

},[])
  let getData=async()=>{
    let from=document.getElementById("d1").value;
    setloading(10);
    let to=document.getElementById("d2").value;
    setloading(20);
    let amount=document.getElementById("l1").value;
    setloading(30);
      let tempdata=await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
      setloading(60);
      let parsedData=await tempdata.json();
      setloading(95);
      document.getElementById('l2').value=parsedData.result;
      setloading(100);
  }
  // console.log(symbol);
  return (
      <>
            <Navbar/>
           
            <div className="container-md mt-md-5 ">
            
            <div className="row">
            
              {!bool && <Loader />}
              <div className="col-md-5 my-4">
            
            <label htmlFor="d1" className="fs-3 mb-1 mt-2">From : </label>
            <select id="d1" className="form-select bg-light fs-5">
                  {!bool?console.log("Loading..."):
                  <>
                  <option value={symbol.AED.code} >{symbol.AED.description}</option>
                  <option value={symbol.ALL.code} >{symbol.ALL.description}</option>
                  <option value={symbol.AMD.code} >{symbol.AMD.description}</option>
                  <option value={symbol.ANG.code} >{symbol.ANG.description}</option>
                  <option value={symbol.AOA.code} >{symbol.AOA.description}</option>
                  <option value={symbol.ARS.code} >{symbol.ARS.description}</option>
                  <option value={symbol.AUD.code} >{symbol.AUD.description}</option>
                  <option value={symbol.AWG.code} >{symbol.AWG.description}</option>
                  <option value={symbol.AZN.code} >{symbol.AZN.description}</option>
                  <option value={symbol.BAM.code} >{symbol.BAM.description}</option>
                  <option value={symbol.BBD.code} >{symbol.BBD.description}</option>
                  <option value={symbol.BDT.code} >{symbol.BDT.description}</option>
                  <option value={symbol.BGN.code} >{symbol.BGN.description}</option>
                  <option value={symbol.BHD.code} >{symbol.BHD.description}</option>
                  <option value={symbol.BIF.code} >{symbol.BIF.description}</option>
                  <option value={symbol.BMD.code} >{symbol.BMD.description}</option>
                  <option value={symbol.BND.code} >{symbol.BND.description}</option>
                  <option value={symbol.BOB.code} >{symbol.BOB.description}</option>
                  <option value={symbol.BRL.code} >{symbol.BRL.description}</option>
                  <option value={symbol.BSD.code} >{symbol.BSD.description}</option>
                  <option value={symbol.BTC.code} >{symbol.BTC.description}</option>
                  <option value={symbol.BTN.code} >{symbol.BTN.description}</option>
                  <option value={symbol.BWP.code} >{symbol.BWP.description}</option>
                  <option value={symbol.BYN.code} >{symbol.BYN.description}</option>
                  <option value={symbol.BZD.code} >{symbol.BZD.description}</option>
                  <option value={symbol.CAD.code} >{symbol.CAD.description}</option>
                  <option value={symbol.CDF.code} >{symbol.CDF.description}</option>
                  <option value={symbol.CHF.code} >{symbol.CHF.description}</option>
                  <option value={symbol.CLF.code} >{symbol.CLF.description}</option>
                  <option value={symbol.CLP.code} >{symbol.CLP.description}</option>
                  <option value={symbol.CNH.code} >{symbol.CNH.description}</option>
                  <option value={symbol.CNY.code} >{symbol.CNY.description}</option>
                  <option value={symbol.COP.code} >{symbol.COP.description}</option>
                  <option value={symbol.CRC.code} >{symbol.CRC.description}</option>
                  <option value={symbol.CUP.code} >{symbol.CUP.description}</option>
                  <option value={symbol.CVE.code} >{symbol.CVE.description}</option>
                  <option value={symbol.DJF.code} >{symbol.DJF.description}</option>
                  <option value={symbol.DKK.code} >{symbol.DKK.description}</option>
                  <option value={symbol.DOP.code} >{symbol.DOP.description}</option>
                  <option value={symbol.DZD.code} >{symbol.DZD.description}</option>
                  <option value={symbol.EGP.code} >{symbol.EGP.description}</option>
                  <option value={symbol.ERN.code} >{symbol.ERN.description}</option>
                  <option value={symbol.ETB.code} >{symbol.ETB.description}</option>
                  <option value={symbol.EUR.code} >{symbol.EUR.description}</option>
                  <option value={symbol.FJD.code} >{symbol.FJD.description}</option>
                  <option value={symbol.FKP.code} >{symbol.FKP.description}</option>
                  <option value={symbol.GBP.code} >{symbol.GBP.description}</option>
                  <option value={symbol.GEL.code} >{symbol.GEL.description}</option>
                  <option value={symbol.GGP.code} >{symbol.GGP.description}</option>
                  <option value={symbol.GHS.code} >{symbol.GHS.description}</option>
                  <option value={symbol.GIP.code} >{symbol.GIP.description}</option>
                  <option value={symbol.GMD.code} >{symbol.GMD.description}</option>
                  <option value={symbol.GNF.code} >{symbol.GNF.description}</option>
                  <option value={symbol.GTQ.code} >{symbol.GTQ.description}</option>
                  <option value={symbol.GYD.code} >{symbol.GYD.description}</option>
                  <option value={symbol.HKD.code} >{symbol.HKD.description}</option>
                  <option value={symbol.HNL.code} >{symbol.HNL.description}</option>
                  <option value={symbol.HRK.code} >{symbol.HRK.description}</option>
                  <option value={symbol.HUF.code} >{symbol.HUF.description}</option>
                  <option value={symbol.IDR.code} >{symbol.IDR.description}</option>
                  <option value={symbol.ILS.code} >{symbol.ILS.description}</option>
                  <option value={symbol.IMP.code} >{symbol.IMP.description}</option>
                  <option value={symbol.INR.code} >{symbol.INR.description}</option>
                  <option value={symbol.IQD.code} >{symbol.IQD.description}</option>
                  <option value={symbol.IRR.code} >{symbol.IRR.description}</option>
                  <option value={symbol.ISK.code} >{symbol.ISK.description}</option>
                  <option value={symbol.JEP.code} >{symbol.JEP.description}</option>
                  <option value={symbol.JMD.code} >{symbol.JMD.description}</option>
                  <option value={symbol.JOD.code} >{symbol.JOD.description}</option>
                  <option value={symbol.JPY.code} >{symbol.JPY.description}</option>
                  <option value={symbol.KES.code} >{symbol.KES.description}</option>
                  <option value={symbol.KGS.code} >{symbol.KGS.description}</option>
                  <option value={symbol.KHR.code} >{symbol.KHR.description}</option>
                  <option value={symbol.KMF.code} >{symbol.KMF.description}</option>
                  <option value={symbol.KPW.code} >{symbol.KPW.description}</option>
                  <option value={symbol.KRW.code} >{symbol.KRW.description}</option>
                  <option value={symbol.KWD.code} >{symbol.KWD.description}</option>
                  <option value={symbol.KYD.code} >{symbol.KYD.description}</option>
                  <option value={symbol.KZT.code} >{symbol.KZT.description}</option>
                  <option value={symbol.LAK.code} >{symbol.LAK.description}</option>
                  <option value={symbol.LBP.code} >{symbol.LBP.description}</option>
                  <option value={symbol.LKR.code} >{symbol.LKR.description}</option>
                  <option value={symbol.LRD.code} >{symbol.LRD.description}</option>
                  <option value={symbol.LSL.code} >{symbol.LSL.description}</option>
                  <option value={symbol.LYD.code} >{symbol.LYD.description}</option>
                  <option value={symbol.MAD.code} >{symbol.MAD.description}</option>
                  <option value={symbol.MDL.code} >{symbol.MDL.description}</option>
                  <option value={symbol.MGA.code} >{symbol.MGA.description}</option>
                  <option value={symbol.MKD.code} >{symbol.MKD.description}</option>
                  <option value={symbol.MMK.code} >{symbol.MMK.description}</option>
                  <option value={symbol.MNT.code} >{symbol.MNT.description}</option>
                  <option value={symbol.MOP.code} >{symbol.MOP.description}</option>
                  <option value={symbol.MRO.code} >{symbol.MRO.description}</option>
                  <option value={symbol.MRU.code} >{symbol.MRU.description}</option>
                  <option value={symbol.MUR.code} >{symbol.MUR.description}</option>
                  <option value={symbol.MVR.code} >{symbol.MVR.description}</option>
                  <option value={symbol.MWK.code} >{symbol.MWK.description}</option>
                  <option value={symbol.MXN.code} >{symbol.MXN.description}</option>
                  <option value={symbol.MYR.code} >{symbol.MYR.description}</option>
                  <option value={symbol.MZN.code} >{symbol.MZN.description}</option>
                  <option value={symbol.NAD.code} >{symbol.NAD.description}</option>
                  <option value={symbol.NGN.code} >{symbol.NGN.description}</option>
                  <option value={symbol.NIO.code} >{symbol.NIO.description}</option>
                  <option value={symbol.NOK.code} >{symbol.NOK.description}</option>
                  <option value={symbol.NPR.code} >{symbol.NPR.description}</option>
                  <option value={symbol.NZD.code} >{symbol.NZD.description}</option>
                  <option value={symbol.OMR.code} >{symbol.OMR.description}</option>
                  <option value={symbol.PAB.code} >{symbol.PAB.description}</option>
                  <option value={symbol.PEN.code} >{symbol.PEN.description}</option>
                  <option value={symbol.PGK.code} >{symbol.PGK.description}</option>
                  <option value={symbol.PHP.code} >{symbol.PHP.description}</option>
                  <option value={symbol.PKR.code} >{symbol.PKR.description}</option>
                  <option value={symbol.PLN.code} >{symbol.PLN.description}</option>
                  <option value={symbol.PYG.code} >{symbol.PYG.description}</option>
                  <option value={symbol.QAR.code} >{symbol.QAR.description}</option>
                  <option value={symbol.RON.code} >{symbol.RON.description}</option>
                  <option value={symbol.RSD.code} >{symbol.RSD.description}</option>
                  <option value={symbol.RUB.code} >{symbol.RUB.description}</option>
                  <option value={symbol.RWF.code} >{symbol.RWF.description}</option>
                  <option value={symbol.SAR.code} >{symbol.SAR.description}</option>
                  <option value={symbol.SBD.code} >{symbol.SBD.description}</option>
                  <option value={symbol.SCR.code} >{symbol.SCR.description}</option>
                  <option value={symbol.SDG.code} >{symbol.SDG.description}</option>
                  <option value={symbol.SEK.code} >{symbol.SEK.description}</option>
                  <option value={symbol.SGD.code} >{symbol.SGD.description}</option>
                  <option value={symbol.SHP.code} >{symbol.SHP.description}</option>
                  <option value={symbol.SLL.code} >{symbol.SLL.description}</option>
                  <option value={symbol.SOS.code} >{symbol.SOS.description}</option>
                  <option value={symbol.SRD.code} >{symbol.SRD.description}</option>
                  <option value={symbol.SSP.code} >{symbol.SSP.description}</option>
                  <option value={symbol.STD.code} >{symbol.STD.description}</option>
                  <option value={symbol.STN.code} >{symbol.STN.description}</option>
                  <option value={symbol.SVC.code} >{symbol.SVC.description}</option>
                  <option value={symbol.SYP.code} >{symbol.SYP.description}</option>
                  <option value={symbol.SZL.code} >{symbol.SZL.description}</option>
                  <option value={symbol.THB.code} >{symbol.THB.description}</option>
                  <option value={symbol.TJS.code} >{symbol.TJS.description}</option>
                  <option value={symbol.TMT.code} >{symbol.TMT.description}</option>
                  <option value={symbol.TND.code} >{symbol.TND.description}</option>
                  <option value={symbol.TOP.code} >{symbol.TOP.description}</option>
                  <option value={symbol.TRY.code} >{symbol.TRY.description}</option>
                  <option value={symbol.TTD.code} >{symbol.TTD.description}</option>
                  <option value={symbol.TWD.code} >{symbol.TWD.description}</option>
                  <option value={symbol.TZS.code} >{symbol.TZS.description}</option>
                  <option value={symbol.UAH.code} >{symbol.UAH.description}</option>
                  <option value={symbol.UGX.code} >{symbol.UGX.description}</option>
                  <option value={symbol.USD.code} >{symbol.USD.description}</option>
                  <option value={symbol.UYU.code} >{symbol.UYU.description}</option>
                  <option value={symbol.UZS.code} >{symbol.UZS.description}</option>
                  <option value={symbol.VEF.code} >{symbol.VEF.description}</option>
                  <option value={symbol.VES.code} >{symbol.VES.description}</option>
                  <option value={symbol.VND.code} >{symbol.VND.description}</option>
                  <option value={symbol.VUV.code} >{symbol.VUV.description}</option>
                  <option value={symbol.WST.code} >{symbol.WST.description}</option>
                  <option value={symbol.XAF.code} >{symbol.XAF.description}</option>
                  <option value={symbol.XAG.code} >{symbol.XAG.description}</option>
                  <option value={symbol.XAU.code} >{symbol.XAU.description}</option>
                  <option value={symbol.XCD.code} >{symbol.XCD.description}</option>
                  <option value={symbol.XDR.code} >{symbol.XDR.description}</option>
                  <option value={symbol.XOF.code} >{symbol.XOF.description}</option>
                  <option value={symbol.XPD.code} >{symbol.XPD.description}</option>
                  <option value={symbol.XPF.code} >{symbol.XPF.description}</option>
                  <option value={symbol.XPT.code} >{symbol.XPT.description}</option>
                  <option value={symbol.YER.code} >{symbol.YER.description}</option>
                  <option value={symbol.ZAR.code} >{symbol.ZAR.description}</option>
                  <option value={symbol.ZMW.code} >{symbol.ZMW.description}</option>
                  <option value={symbol.ZWL.code} >{symbol.ZWL.description}</option>

                  </>
                  };
              
            </select>
            <label htmlFor="l1"  className="mt-1 fs-3">Amount : </label>
            <input type="text" id="l1" className={`form-control`} />
              </div>
              <div className="offset-md-2 col-md-5 my-2">
              
            <label htmlFor="d2" className="fs-3 mb-1 mt-2">To : </label>
            <select id="d2" className="form-select bg-light fs-5">
            {!bool?console.log("Loading..."):
                  <>
                  <option value={symbol.AED.code} >{symbol.AED.description}</option>
                  <option value={symbol.ALL.code} >{symbol.ALL.description}</option>
                  <option value={symbol.AMD.code} >{symbol.AMD.description}</option>
                  <option value={symbol.ANG.code} >{symbol.ANG.description}</option>
                  <option value={symbol.AOA.code} >{symbol.AOA.description}</option>
                  <option value={symbol.ARS.code} >{symbol.ARS.description}</option>
                  <option value={symbol.AUD.code} >{symbol.AUD.description}</option>
                  <option value={symbol.AWG.code} >{symbol.AWG.description}</option>
                  <option value={symbol.AZN.code} >{symbol.AZN.description}</option>
                  <option value={symbol.BAM.code} >{symbol.BAM.description}</option>
                  <option value={symbol.BBD.code} >{symbol.BBD.description}</option>
                  <option value={symbol.BDT.code} >{symbol.BDT.description}</option>
                  <option value={symbol.BGN.code} >{symbol.BGN.description}</option>
                  <option value={symbol.BHD.code} >{symbol.BHD.description}</option>
                  <option value={symbol.BIF.code} >{symbol.BIF.description}</option>
                  <option value={symbol.BMD.code} >{symbol.BMD.description}</option>
                  <option value={symbol.BND.code} >{symbol.BND.description}</option>
                  <option value={symbol.BOB.code} >{symbol.BOB.description}</option>
                  <option value={symbol.BRL.code} >{symbol.BRL.description}</option>
                  <option value={symbol.BSD.code} >{symbol.BSD.description}</option>
                  <option value={symbol.BTC.code} >{symbol.BTC.description}</option>
                  <option value={symbol.BTN.code} >{symbol.BTN.description}</option>
                  <option value={symbol.BWP.code} >{symbol.BWP.description}</option>
                  <option value={symbol.BYN.code} >{symbol.BYN.description}</option>
                  <option value={symbol.BZD.code} >{symbol.BZD.description}</option>
                  <option value={symbol.CAD.code} >{symbol.CAD.description}</option>
                  <option value={symbol.CDF.code} >{symbol.CDF.description}</option>
                  <option value={symbol.CHF.code} >{symbol.CHF.description}</option>
                  <option value={symbol.CLF.code} >{symbol.CLF.description}</option>
                  <option value={symbol.CLP.code} >{symbol.CLP.description}</option>
                  <option value={symbol.CNH.code} >{symbol.CNH.description}</option>
                  <option value={symbol.CNY.code} >{symbol.CNY.description}</option>
                  <option value={symbol.COP.code} >{symbol.COP.description}</option>
                  <option value={symbol.CRC.code} >{symbol.CRC.description}</option>
                  <option value={symbol.CUP.code} >{symbol.CUP.description}</option>
                  <option value={symbol.CVE.code} >{symbol.CVE.description}</option>
                  <option value={symbol.DJF.code} >{symbol.DJF.description}</option>
                  <option value={symbol.DKK.code} >{symbol.DKK.description}</option>
                  <option value={symbol.DOP.code} >{symbol.DOP.description}</option>
                  <option value={symbol.DZD.code} >{symbol.DZD.description}</option>
                  <option value={symbol.EGP.code} >{symbol.EGP.description}</option>
                  <option value={symbol.ERN.code} >{symbol.ERN.description}</option>
                  <option value={symbol.ETB.code} >{symbol.ETB.description}</option>
                  <option value={symbol.EUR.code} >{symbol.EUR.description}</option>
                  <option value={symbol.FJD.code} >{symbol.FJD.description}</option>
                  <option value={symbol.FKP.code} >{symbol.FKP.description}</option>
                  <option value={symbol.GBP.code} >{symbol.GBP.description}</option>
                  <option value={symbol.GEL.code} >{symbol.GEL.description}</option>
                  <option value={symbol.GGP.code} >{symbol.GGP.description}</option>
                  <option value={symbol.GHS.code} >{symbol.GHS.description}</option>
                  <option value={symbol.GIP.code} >{symbol.GIP.description}</option>
                  <option value={symbol.GMD.code} >{symbol.GMD.description}</option>
                  <option value={symbol.GNF.code} >{symbol.GNF.description}</option>
                  <option value={symbol.GTQ.code} >{symbol.GTQ.description}</option>
                  <option value={symbol.GYD.code} >{symbol.GYD.description}</option>
                  <option value={symbol.HKD.code} >{symbol.HKD.description}</option>
                  <option value={symbol.HNL.code} >{symbol.HNL.description}</option>
                  <option value={symbol.HRK.code} >{symbol.HRK.description}</option>
                  <option value={symbol.HUF.code} >{symbol.HUF.description}</option>
                  <option value={symbol.IDR.code} >{symbol.IDR.description}</option>
                  <option value={symbol.ILS.code} >{symbol.ILS.description}</option>
                  <option value={symbol.IMP.code} >{symbol.IMP.description}</option>
                  <option value={symbol.INR.code} selected>{symbol.INR.description}</option>
                  <option value={symbol.IQD.code} >{symbol.IQD.description}</option>
                  <option value={symbol.IRR.code} >{symbol.IRR.description}</option>
                  <option value={symbol.ISK.code} >{symbol.ISK.description}</option>
                  <option value={symbol.JEP.code} >{symbol.JEP.description}</option>
                  <option value={symbol.JMD.code} >{symbol.JMD.description}</option>
                  <option value={symbol.JOD.code} >{symbol.JOD.description}</option>
                  <option value={symbol.JPY.code} >{symbol.JPY.description}</option>
                  <option value={symbol.KES.code} >{symbol.KES.description}</option>
                  <option value={symbol.KGS.code} >{symbol.KGS.description}</option>
                  <option value={symbol.KHR.code} >{symbol.KHR.description}</option>
                  <option value={symbol.KMF.code} >{symbol.KMF.description}</option>
                  <option value={symbol.KPW.code} >{symbol.KPW.description}</option>
                  <option value={symbol.KRW.code} >{symbol.KRW.description}</option>
                  <option value={symbol.KWD.code} >{symbol.KWD.description}</option>
                  <option value={symbol.KYD.code} >{symbol.KYD.description}</option>
                  <option value={symbol.KZT.code} >{symbol.KZT.description}</option>
                  <option value={symbol.LAK.code} >{symbol.LAK.description}</option>
                  <option value={symbol.LBP.code} >{symbol.LBP.description}</option>
                  <option value={symbol.LKR.code} >{symbol.LKR.description}</option>
                  <option value={symbol.LRD.code} >{symbol.LRD.description}</option>
                  <option value={symbol.LSL.code} >{symbol.LSL.description}</option>
                  <option value={symbol.LYD.code} >{symbol.LYD.description}</option>
                  <option value={symbol.MAD.code} >{symbol.MAD.description}</option>
                  <option value={symbol.MDL.code} >{symbol.MDL.description}</option>
                  <option value={symbol.MGA.code} >{symbol.MGA.description}</option>
                  <option value={symbol.MKD.code} >{symbol.MKD.description}</option>
                  <option value={symbol.MMK.code} >{symbol.MMK.description}</option>
                  <option value={symbol.MNT.code} >{symbol.MNT.description}</option>
                  <option value={symbol.MOP.code} >{symbol.MOP.description}</option>
                  <option value={symbol.MRO.code} >{symbol.MRO.description}</option>
                  <option value={symbol.MRU.code} >{symbol.MRU.description}</option>
                  <option value={symbol.MUR.code} >{symbol.MUR.description}</option>
                  <option value={symbol.MVR.code} >{symbol.MVR.description}</option>
                  <option value={symbol.MWK.code} >{symbol.MWK.description}</option>
                  <option value={symbol.MXN.code} >{symbol.MXN.description}</option>
                  <option value={symbol.MYR.code} >{symbol.MYR.description}</option>
                  <option value={symbol.MZN.code} >{symbol.MZN.description}</option>
                  <option value={symbol.NAD.code} >{symbol.NAD.description}</option>
                  <option value={symbol.NGN.code} >{symbol.NGN.description}</option>
                  <option value={symbol.NIO.code} >{symbol.NIO.description}</option>
                  <option value={symbol.NOK.code} >{symbol.NOK.description}</option>
                  <option value={symbol.NPR.code} >{symbol.NPR.description}</option>
                  <option value={symbol.NZD.code} >{symbol.NZD.description}</option>
                  <option value={symbol.OMR.code} >{symbol.OMR.description}</option>
                  <option value={symbol.PAB.code} >{symbol.PAB.description}</option>
                  <option value={symbol.PEN.code} >{symbol.PEN.description}</option>
                  <option value={symbol.PGK.code} >{symbol.PGK.description}</option>
                  <option value={symbol.PHP.code} >{symbol.PHP.description}</option>
                  <option value={symbol.PKR.code} >{symbol.PKR.description}</option>
                  <option value={symbol.PLN.code} >{symbol.PLN.description}</option>
                  <option value={symbol.PYG.code} >{symbol.PYG.description}</option>
                  <option value={symbol.QAR.code} >{symbol.QAR.description}</option>
                  <option value={symbol.RON.code} >{symbol.RON.description}</option>
                  <option value={symbol.RSD.code} >{symbol.RSD.description}</option>
                  <option value={symbol.RUB.code} >{symbol.RUB.description}</option>
                  <option value={symbol.RWF.code} >{symbol.RWF.description}</option>
                  <option value={symbol.SAR.code} >{symbol.SAR.description}</option>
                  <option value={symbol.SBD.code} >{symbol.SBD.description}</option>
                  <option value={symbol.SCR.code} >{symbol.SCR.description}</option>
                  <option value={symbol.SDG.code} >{symbol.SDG.description}</option>
                  <option value={symbol.SEK.code} >{symbol.SEK.description}</option>
                  <option value={symbol.SGD.code} >{symbol.SGD.description}</option>
                  <option value={symbol.SHP.code} >{symbol.SHP.description}</option>
                  <option value={symbol.SLL.code} >{symbol.SLL.description}</option>
                  <option value={symbol.SOS.code} >{symbol.SOS.description}</option>
                  <option value={symbol.SRD.code} >{symbol.SRD.description}</option>
                  <option value={symbol.SSP.code} >{symbol.SSP.description}</option>
                  <option value={symbol.STD.code} >{symbol.STD.description}</option>
                  <option value={symbol.STN.code} >{symbol.STN.description}</option>
                  <option value={symbol.SVC.code} >{symbol.SVC.description}</option>
                  <option value={symbol.SYP.code} >{symbol.SYP.description}</option>
                  <option value={symbol.SZL.code} >{symbol.SZL.description}</option>
                  <option value={symbol.THB.code} >{symbol.THB.description}</option>
                  <option value={symbol.TJS.code} >{symbol.TJS.description}</option>
                  <option value={symbol.TMT.code} >{symbol.TMT.description}</option>
                  <option value={symbol.TND.code} >{symbol.TND.description}</option>
                  <option value={symbol.TOP.code} >{symbol.TOP.description}</option>
                  <option value={symbol.TRY.code} >{symbol.TRY.description}</option>
                  <option value={symbol.TTD.code} >{symbol.TTD.description}</option>
                  <option value={symbol.TWD.code} >{symbol.TWD.description}</option>
                  <option value={symbol.TZS.code} >{symbol.TZS.description}</option>
                  <option value={symbol.UAH.code} >{symbol.UAH.description}</option>
                  <option value={symbol.UGX.code} >{symbol.UGX.description}</option>
                  <option value={symbol.USD.code} >{symbol.USD.description}</option>
                  <option value={symbol.UYU.code} >{symbol.UYU.description}</option>
                  <option value={symbol.UZS.code} >{symbol.UZS.description}</option>
                  <option value={symbol.VEF.code} >{symbol.VEF.description}</option>
                  <option value={symbol.VES.code} >{symbol.VES.description}</option>
                  <option value={symbol.VND.code} >{symbol.VND.description}</option>
                  <option value={symbol.VUV.code} >{symbol.VUV.description}</option>
                  <option value={symbol.WST.code} >{symbol.WST.description}</option>
                  <option value={symbol.XAF.code} >{symbol.XAF.description}</option>
                  <option value={symbol.XAG.code} >{symbol.XAG.description}</option>
                  <option value={symbol.XAU.code} >{symbol.XAU.description}</option>
                  <option value={symbol.XCD.code} >{symbol.XCD.description}</option>
                  <option value={symbol.XDR.code} >{symbol.XDR.description}</option>
                  <option value={symbol.XOF.code} >{symbol.XOF.description}</option>
                  <option value={symbol.XPD.code} >{symbol.XPD.description}</option>
                  <option value={symbol.XPF.code} >{symbol.XPF.description}</option>
                  <option value={symbol.XPT.code} >{symbol.XPT.description}</option>
                  <option value={symbol.YER.code} >{symbol.YER.description}</option>
                  <option value={symbol.ZAR.code} >{symbol.ZAR.description}</option>
                  <option value={symbol.ZMW.code} >{symbol.ZMW.description}</option>
                  <option value={symbol.ZWL.code} >{symbol.ZWL.description}</option>

                  </>
                  };
            </select>
            <label htmlFor="l2"  className="mt-1 fs-3">Amount : </label>
            <input type="text" name="" id="l2" className={`form-control`} />
              </div>
            </div>
            <div className="row mt-2">
              <div className="mt-md-5 offset-md-4 col-md-4"><button className="btn fs-5 btn-primary w-100" onClick={getData}>Convert</button></div>
            </div>
            </div>
            <LoadingBar
        color='#f11946'
        height={4 }
        progress={loading}
        onLoaderFinished={() => setloading(0)}
      />
      </>
  );
}

export default App;
