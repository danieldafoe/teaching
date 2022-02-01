// Vanilla implementation of event listeners in JavaScript

// Run the function that I pass every time this event occurs
document.addEventListener('click', () => {
  // Here is what I would like to happen each time
  // the event takes place
  window.close();
});



// Here's a vanilla JavaScript implementation of the Observer pattern

// Create an Observable class
class UniversityObservable {
  // This array will hold all of the Observers that
  // subscribe to this Observable to wait for changes
  students: any[];

  constructor() {
    this.students = [];
  }

  // The method called by Observers in order to tell 
  // the Observable to send them updates
  // Example: UniversityObservable.subscribe((data) => {})
  subscribe(func: (value: any) => any) {
    this.students.push(func);
  }

  // The method called by Observers that no longer
  // wish to receive updates from the Observable
  // Example: UniversityObservable.unsubscribe()
  unsubscribe(func: (value: any) => any) {
    this.students = this.students.filter(observer => observer !== func);
  }

  // The method called on the Observable that pushes
  // data notifications to the list of Observers
  notify(data: any) {
    this.students.forEach(student => student(data));
  }
}
