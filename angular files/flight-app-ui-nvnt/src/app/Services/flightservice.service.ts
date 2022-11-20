import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:8084/flight"

const BASE_URL_USER = "http://localhost:8092/user"

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  createFlight(flight : {flightNumber:number, airline:String, flightSource:String, flightDestination:String, startDateTime:String, endDateTime:String, scheduledDays:String, instruments:String, businessClassSeat:Number, nonBusinessClassSeat:Number, ticketFare:Number, flightRows:Number, mealType:String}) {
    return this.http.post(BASE_URL+"/register", flight);
  }

  getFlight() {
    return this.http.get(BASE_URL);
  }

  deleteFlight(flight:any) {
    return this.http.delete(BASE_URL+"/deleteFlight/" + flight.id)
  }

  getFlightsAsStringList() {
    //return this.http.get(BASE_URL_USER+"/flights");
    return this.http.get(BASE_URL+"/getFlightStrArray");
  }

  //=======================Flight Booking MGT================================
  bookFlight(booking: {user:String, airline:String, source:String, destination:String, date:String, seatcount:number}) {
    return this.http.post(BASE_URL_USER+"/addBooking", booking);
  }

  getBookings() {
    return this.http.get(BASE_URL_USER+"/getBookings")
  }

  deleteBooking(booking: any) {
    return this.http.delete(BASE_URL_USER+"/deleteBooking",booking.id)
  }

  constructor(public http: HttpClient) { }
}



