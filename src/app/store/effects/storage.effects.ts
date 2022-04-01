import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { storeData } from "../actions";

@Injectable()
export class StoreDataEffects {
  constructor(private actions$: Actions) {}

  storeData$ = createEffect(() => this.actions$.pipe(
    // We use ofType() and give it whatever type
    // of Action we want to listen for.
    ofType(storeData.type),
    // Using tap() allows us to peek into our
    // stream of actions and execute some logic.
    tap((action: any) => {
      const ls = window.localStorage;
      ls.setItem('Book_Store', action.value);
    }),
  ),
  // This removes the requirement to dispatch
  // a new action from an NgRx Effect.
  { dispatch: false });
}
