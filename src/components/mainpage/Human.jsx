import React, { useState, useEffect } from "react";
import "./human.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Mlresult from "./Mlresult";
import { Link, navigate } from 'react-router-dom';

const Human = () => {
  // const navigate = useNavigate();
  // const [data, setData] = useState({
  //   symptom1: "",
  //   symptom2: "",
  //   symptom3: "",
  //   symptom4: "",
  //   symptom5: "",
  //   symptom6: "",
  //   symptom7: "",
  //   symptom8: "",
  //   symptom9: "",
  //   symptom10: "",
  //   symptom11: "",
  //   symptom12: "",
  //   symptom13: "",
  //   symptom14: "",
  //   symptom15: "",
  //   symptom16: "",
  //   symptom17: "",
  // });

  // useEffect(() => {
  //   if (!localStorage.getItem("auth")) {
  //     navigate("/login");
  //   }
  // }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios
  //     .post("https://minor-ml-waua.onrender.com/search", {
  //       symptom1: state.symptom1,
  //       symptom2: state.symptom2,
  //       symptom3: state.symptom3,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  const [symptom1, setSymptom1] = useState('');
  const [symptom2, setSymptom2] = useState('');
  const [symptom3, setSymptom3] = useState('');
  const [symptom4, setSymptom4] = useState('');
  const [symptom5, setSymptom5] = useState('');
  const [symptom6, setSymptom6] = useState('');
  const [symptom7, setSymptom7] = useState('');
  const [symptom8, setSymptom8] = useState('');
  const [symptom9, setSymptom9] = useState('');
  const [symptom10, setSymptom10] = useState('');
  const [symptom11, setSymptom11] = useState('');
  const [symptom12, setSymptom12] = useState('');
  const [symptom13, setSymptom13] = useState('');
  const [symptom14, setSymptom14] = useState('');
  const [symptom15, setSymptom15] = useState('');
  const [symptom16, setSymptom16] = useState('');
  const [symptom17, setSymptom17] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // const data1 = symptom1+','+symptom2+','+symptom3+','+symptom4+','+symptom5+','+symptom6+','+symptom7+','+symptom8+','+symptom9+','+symptom10+','+symptom11+','+symptom12+','+symptom13+','+symptom14+','+symptom15+','+symptom16+','+symptom17;
    let data1='';
    if(symptom1!==''){
      data1=symptom1;
    }
    if(symptom2!==''){
      data1=data1+','+symptom2;
    }
    if(symptom3!==''){
      data1=data1+','+symptom3;
    }
    if(symptom4!==''){
      data1=data1+','+symptom4;
    }
    if(symptom5!==''){
      data1=data1+','+symptom5;
    }
    if(symptom6!==''){
      data1=data1+','+symptom6;
    }
    if(symptom7!==''){
      data1=data1+','+symptom7;
    }
    if(symptom8!==''){
      data1=data1+','+symptom8;
    }
    if(symptom9!==''){
      data1=data1+','+symptom9;
    }
    if(symptom10!==''){
      data1=data1+','+symptom10;
    }
    if(symptom11!==''){
      data1=data1+','+symptom11;
    }
    if(symptom12!==''){
      data1=data1+','+symptom12;
    }
    if(symptom13!==''){
      data1=data1+','+symptom13;
    }
    if(symptom14!==''){
      data1=data1+','+symptom14;
    }
    if(symptom15!==''){
      data1=data1+','+symptom15;
    }
    if(symptom16!==''){
      data1=data1+','+symptom16;
    }
    if(symptom17!==''){
      data1=data1+','+symptom17;
    }

    const data={
      data:data1
    }

    axios.post('https://minor-ml-waua.onrender.com/search', data)
      .then(response => {
        let ans=response.data;
        // setA(ans);
        console.log(ans);
        navigate('/mlresult', { state: { message: ans } });
      })
      .catch(error => {
        console.log(error);
      }).finally(()=>{
        console.log(symptom1);
        console.log(symptom2);
        console.log(symptom3);
        console.log(symptom4);
        console.log(symptom5);
        console.log(symptom6);
        console.log(symptom7);
        console.log(symptom8);
        console.log(symptom9);
        console.log(symptom10);
        console.log(symptom11);
        console.log(symptom12);
        console.log(symptom13);
        console.log(symptom14);
        console.log(symptom15);
        console.log(symptom16);
        console.log(symptom17);
      });
  }

  const handleSymptom1Change = (event) => {
    setSymptom1(event.target.value);
  }

  const handleSymptom2Change = (event) => {
    setSymptom2(event.target.value);
  }

  const handleSymptom3Change = (event) => {
    setSymptom3(event.target.value);
  }
  const handleSymptom4Change = (event) => {
    setSymptom4(event.target.value);
  }
  const handleSymptom5Change = (event) => {
    setSymptom5(event.target.value);
  }
  const handleSymptom6Change = (event) => {
    setSymptom6(event.target.value);
  }
  const handleSymptom7Change = (event) => {
    setSymptom7(event.target.value);
  }
  const handleSymptom8Change = (event) => {
    setSymptom8(event.target.value);
  }
  const handleSymptom9Change = (event) => {
    setSymptom9(event.target.value);
  }
  const handleSymptom10Change = (event) => {
    setSymptom10(event.target.value);
  }
  const handleSymptom11Change = (event) => {
    setSymptom11(event.target.value);
  }
  const handleSymptom12Change = (event) => {
    setSymptom12(event.target.value);
  }
  const handleSymptom13Change = (event) => {
    setSymptom13(event.target.value);
  }
  const handleSymptom14Change = (event) => {
    setSymptom14(event.target.value);
  }
  const handleSymptom15Change = (event) => {
    setSymptom15(event.target.value);
  }
  const handleSymptom16Change = (event) => {
    setSymptom16(event.target.value);
  }
  const handleSymptom17Change = (event) => {
    setSymptom17(event.target.value);
  }


  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="display-1 text-black">Tell me your Symptoms!</p>
      <form onSubmit={handleSubmit}>
        <span
          className="custom-dropdown big"
          value={symptom1}
          onChange={handleSymptom1Change}
        >
          <select>
            <option>Enter Symptom 1</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom2}
          onChange={handleSymptom2Change}
        >
          <select>
            <option>Enter Symptom 2</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom3}
          onChange={handleSymptom3Change}
        >
          <select>
            <option>Enter Symptom 3</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom4}
          onChange={handleSymptom4Change}
        >
          <select>
            <option>Enter Symptom 4</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom5}
          onChange={handleSymptom5Change}
        >
          <select>
            <option>Enter Symptom 5</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom6}
          onChange={handleSymptom6Change}
        >
          <select>
            <option>Enter Symptom 6</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom7}
          onChange={handleSymptom7Change}
        >
          <select>
            <option>Enter Symptom 7</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom8}
          onChange={handleSymptom8Change}
        >
          <select>
            <option>Enter Symptom 8</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom9}
          onChange={handleSymptom9Change}
        >
          <select>
            <option>Enter Symptom 9</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom10}
          onChange={handleSymptom10Change}
        >
          <select>
            <option>Enter Symptom 10</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom11}
          onChange={handleSymptom11Change}
        >
          <select>
            <option>Enter Symptom 11</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom12}
          onChange={handleSymptom12Change}
        >
          <select>
            <option>Enter Symptom 12</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom13}
          onChange={handleSymptom13Change}
        >
          <select>
            <option>Enter Symptom 13</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom14}
          onChange={handleSymptom14Change}
        >
          <select>
            <option>Enter Symptom 14</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom15}
          onChange={handleSymptom15Change}
        >
          <select>
            <option>Enter Symptom 15</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom16}
          onChange={handleSymptom16Change}
        >
          <select>
            <option>Enter Symptom 16</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>
        <span
          className="custom-dropdown big"
          value={symptom17}
          onChange={handleSymptom17Change}
        >
          <select>
            <option>Enter Symptom 17</option>
            <option value="blurred_and_distorted_vision">
              blurred_and_distorted_vision
            </option>
            <option value="mood_swings">mood_swings</option>
            <option value="stomach_bleeding">stomach_bleeding</option>
            <option value="spinning_movements">spinning_movements</option>
            <option value="inflammatory_nails">inflammatory_nails</option>
            <option value="slurred_speech">slurred_speech</option>
            <option value="muscle_weakness">muscle_weakness</option>
            <option value="swollen_legs">swollen_legs</option>
            <option value="cough">cough</option>
            <option value="stiff_neck">stiff_neck</option>
            <option value="sunken_eyes">sunken_eyes</option>
            <option value="blister">blister</option>
            <option value="history_of_alcohol_consumption">
              history_of_alcohol_consumption
            </option>
            <option value="nausea">nausea</option>
            <option value="stomach_pain">stomach_pain</option>
            <option value="pain_in_anal_region">pain_in_anal_region</option>
            <option value="neck_pain">neck_pain</option>
            <option value="family_history">family_history</option>
            <option value="sweating">sweating</option>
            <option value="lethargy">lethargy</option>
            <option value="scurring">scurring</option>
            <option value="burning_micturition">burning_micturition</option>
            <option value="muscle_pain">muscle_pain</option>
            <option value="fast_heart_rate">fast_heart_rate</option>
            <option value="dischromic _patches">dischromic _patches</option>
            <option value="itching">itching</option>
            <option value="diarrhoea">diarrhoea</option>
            <option value="swelling_joints">swelling_joints</option>
            <option value="high_fever">high_fever</option>
            <option value="continuous_sneezing">continuous_sneezing</option>
            <option value="red_sore_around_nose">red_sore_around_nose</option>
            <option value="silver_like_dusting">silver_like_dusting</option>
            <option value="skin_peeling">skin_peeling</option>
            <option value="constipation">constipation</option>
            <option value="weight_gain">weight_gain</option>
            <option value="headache">headache</option>
            <option value="movement_stiffness">movement_stiffness</option>
            <option value="extra_marital_contacts">
              extra_marital_contacts
            </option>
            <option value="foul_smell_of urine">foul_smell_of urine</option>
            <option value="joint_pain">joint_pain</option>
            <option value="breathlessness">breathlessness</option>
            <option value="toxic_look_(typhos)">toxic_look_(typhos)</option>
            <option value="altered_sensorium">altered_sensorium</option>
            <option value="throat_irritation">throat_irritation</option>
            <option value="belly_pain">belly_pain</option>
            <option value="swelling_of_stomach">swelling_of_stomach</option>
            <option value="abdominal_pain">abdominal_pain</option>
            <option value="small_dents_in_nails">small_dents_in_nails</option>
            <option value="swollen_extremeties">swollen_extremeties</option>
            <option value="yellow_urine">yellow_urine</option>
            <option value="acidity">acidity</option>
            <option value="abnormal_menstruation">abnormal_menstruation</option>
            <option value="vomiting">vomiting</option>
            <option value="irregular_sugar_level">irregular_sugar_level</option>
            <option value="patches_in_throat">patches_in_throat</option>
            <option value="cramps">cramps</option>
            <option value="runny_nose">runny_nose</option>
            <option value="acute_liver_failure">acute_liver_failure</option>
            <option value="obesity">obesity</option>
            <option value="hip_joint_pain">hip_joint_pain</option>
            <option value="bloody_stool">bloody_stool</option>
            <option value="yellowing_of_eyes">yellowing_of_eyes</option>
            <option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
            <option value="coma">coma</option>
            <option value="irritation_in_anus">irritation_in_anus</option>
            <option value="palpitations">palpitations</option>
            <option value="dehydration">dehydration</option>
            <option value="malaise">malaise</option>
            <option value="restlessness">restlessness</option>
            <option value="muscle_wasting">muscle_wasting</option>
            <option value="distention_of_abdomen">distention_of_abdomen</option>
            <option value="red_spots_over_body">red_spots_over_body</option>
            <option value="redness_of_eyes">redness_of_eyes</option>
            <option value="excessive_hunger">excessive_hunger</option>
            <option value="swollen_blood_vessels">swollen_blood_vessels</option>
            <option value="blood_in_sputum">blood_in_sputum</option>
            <option value="painful_walking">painful_walking</option>
            <option value="loss_of_smell">loss_of_smell</option>
            <option value="weakness_of_one_body_side">
              weakness_of_one_body_side
            </option>
            <option value="receiving_unsterile_injections">
              receiving_unsterile_injections
            </option>
            <option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
            <option value="fluid_overload">fluid_overload</option>
            <option value="unsteadiness">unsteadiness</option>
            <option value="knee_pain">knee_pain</option>
            <option value="internal_itching">internal_itching</option>
            <option value="watering_from_eyes">watering_from_eyes</option>
            <option value="spotting_ urination">spotting_ urination</option>
            <option value="pain_during_bowel_movements">
              pain_during_bowel_movements
            </option>
            <option value="irritability">irritability</option>
            <option value="prominent_veins_on_calf">
              prominent_veins_on_calf
            </option>
            <option value="receiving_blood_transfusion">
              receiving_blood_transfusion
            </option>
            <option value="fatigue">fatigue</option>
            <option value="loss_of_balance">loss_of_balance</option>
            <option value="back_pain">back_pain</option>
            <option value="polyuria">polyuria</option>
            <option value="phlegm">phlegm</option>
            <option value="enlarged_thyroid">enlarged_thyroid</option>
            <option value="bladder_discomfort">bladder_discomfort</option>
            <option value="continuous_feel_of_urine">
              continuous_feel_of_urine
            </option>
            <option value="visual_disturbances">visual_disturbances</option>
            <option value="ulcers_on_tongue">ulcers_on_tongue</option>
            <option value="weight_loss">weight_loss</option>
            <option value="shivering">shivering</option>
            <option value="bruising">bruising</option>
            <option value="depression">depression</option>
            <option value="mild_fever">mild_fever</option>
            <option value="congestion">congestion</option>
            <option value="mucoid_sputum">mucoid_sputum</option>
            <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
            <option value="lack_of_concentration">lack_of_concentration</option>
            <option value="dizziness">dizziness</option>
            <option value="sinus_pressure">sinus_pressure</option>
            <option value="indigestion">indigestion</option>
            <option value="yellowish_skin">yellowish_skin</option>
            <option value="brittle_nails">brittle_nails</option>
            <option value="pus_filled_pimples">pus_filled_pimples</option>
            <option value="weakness_in_limbs">weakness_in_limbs</option>
            <option value="skin_rash">skin_rash</option>
            <option value="puffy_face_and_eyes">puffy_face_and_eyes</option>
            <option value="loss_of_appetite">loss_of_appetite</option>
            <option value="blackheads">blackheads</option>
            <option value="yellow_crust_ooze">yellow_crust_ooze</option>
            <option value="drying_and_tingling_lips">
              drying_and_tingling_lips
            </option>
            <option value="chest_pain">chest_pain</option>
            <option value="dark_urine">dark_urine</option>
            <option value="rusty_sputum">rusty_sputum</option>
            <option value="chills">chills</option>
            <option value="increased_appetite">increased_appetite</option>
            <option value="anxiety">anxiety</option>
            <option value="cold_hands_and_feets">cold_hands_and_feets</option>
            <option value="passage_of_gases">passage_of_gases</option>
          </select>
        </span>

        <br />

        {/* <input type="submit" value="Submit" className="submit-button" /> */}
        {/* <Link to="/mlresult" className="submit-button">Go to other page</Link> */}
        <button onClick={handleSubmit} className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Human;
