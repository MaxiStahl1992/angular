import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, tap } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketUrl = 'api/tickets';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketUrl)
      .pipe(
        tap(_ => console.log('fetched tickets')),
        catchError(this.handleError<Ticket[]>('getTickets', []))
      );
  }

  getTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketUrl}/${id}`;
    return this.http.get<Ticket>(url)
      .pipe(
        tap(_ => console.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Ticket>(`getHero id=${id}`))
    );
  }

  updateTicket(ticket: Ticket): Observable<any> {
    return this.http.put(this.ticketUrl, ticket, this.httpOptions)
      .pipe(
          tap(_ => console.log(`updated ticket # ${ticket.id}`)),
          catchError(this.handleError<any>('updateTicket'))

      )
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  } 
}
