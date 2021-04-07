import React from "react";
import Hero from "../components/Hero";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import SingleFact from "../components/SingleFact";
import DoubleFact from "../components/DoubleFact";
import { useQuery } from "react-query";
import axios from "axios";
const API_URL = "http://numbersapi.com";
// const query = (queryKey: any, apiUrl: any) => {
//   const { data, isLoading, ...rest } = useQuery(
//     queryKey,
//     async () => await axios.get(apiUrl)
//   );

//   return {
//     data,
//     isLoading,
//     rest,
//   };
// };
const facts = () => {
  const [year, setYearFact] = React.useState<any>();
  const [date, setDayAndMonth] = React.useState<any>();
  const [number, setNumber] = React.useState<any>();
  const [state, setState] = React.useState<{
    type: string;
    date: Date | null;
    number: number;
    day: number;
    month: number;
    year: number | null | undefined;
  }>({
    type: "",
    date: null,
    number: 0,
    day: 0,
    month: 0,
    year: null,
  });
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, number: event.target.valueAsNumber });
    setDayAndMonth(false);
        setYearFact(false);
        setNumber(false)
  };
  const handleType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, type: event.target.value });
    setDayAndMonth(false);
        setYearFact(false);
        setNumber(false)
  };
  const {
      data:getYearFact
    } = useQuery(
      "getYearFact",
      async () => await axios.get(`${API_URL}/${state.year && state.year}/year`),
      {
        retry: 2,
        enabled: !!date
      }
      )
  const {
      data:getDayAndMonthFact
    } = useQuery(
      "getDayAndMonthFact",
      async () => await axios.get(`${API_URL}/${state.year && state.month + "/" + state.day}/${
                state.type
              }`),
      {
        retry: 2,
        enabled: !!year
      }
      )
  const {
      data:getNumberFact
    } = useQuery(
      "getNumberFact",
      async () => await axios.get(`${API_URL}/${state.number}?notfound=floor/${
            state.type === "trivia" ? "" : state.type
          }`),
      {
        retry: 2,
        enabled: !!number
      }
      )
  const handleDate = (date: Date | null) => {
    setState({
      ...state,
      date,
      day: Number(date?.getDate()),
      month: Number(date?.getMonth()) + 1,
      year: date?.getFullYear(),
    });
    setDayAndMonth(false);
        setYearFact(false);
        setNumber(false)
  };
  const getFacts = (e: any) => {
    e.preventDefault();
    if (state.type === "date") {
 
        setDayAndMonth(true);
        setYearFact(true);
        setNumber(false);
          }
          if (state.type !== "date") {
          setDayAndMonth(false);
          setYearFact(false);
          setNumber(true);
    }
  };
  return (
    <div>
      <Hero button={false} text="" title="Facts" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <form
            className="xl:w-1/2 lg:w-3/4 w-full mx-auto mb-5"
            onSubmit={getFacts}
          >
            <div className="form-group">
              <select
                name="type"
                id="type"
                className="form-control capitalize rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base"
                onChange={handleType}
              >
                <option value="">Please Select Type</option>
                <option value="trivia">Trivia</option>
                <option value="math">Math</option>
                <option value="date">date</option>
              </select>
            </div>
            {state.type !== "" && state.type !== "date" && (
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Please Enter Number"
                  onChange={handleNumber}
                  name="number"
                  id="number"
                />
              </div>
            )}
            {state.type === "date" && (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  animateYearScrolling
                  id="date-picker-dialog"
                  label="Click the Icon To Select Date"
                  format="dd/MM/yyyy"
                  fullWidth
                  color="primary"
                  value={state.date}
                  onChange={handleDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            )}
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get Facts
            </button>
          </form>
          {
            number && 
          <SingleFact data={getNumberFact?.data} />
          }
          {
            date && year && 
          <DoubleFact year={getYearFact?.data} date={getDayAndMonthFact?.data} />
          }
        </div>
      </section>
    </div>
  );
};

export default facts;
