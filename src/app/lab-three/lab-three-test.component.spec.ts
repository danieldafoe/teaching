import { LabThreeComponent } from "./lab-three.component";


describe('LabThreeComponent', () => {
 

  describe("when using converToFloat Function", ()=>{
    let component: LabThreeComponent;
    let mockFormBuilder = jasmine.createSpyObj('FormBuilder', ['group']);
      it("should return a Number",()=>{
        component = new LabThreeComponent(mockFormBuilder);
        const answer = component.convertToFloat('20');
        expect(typeof answer).toEqual('number');   
      })

  })
});
describe("when using calculateTotal function with a positive number", ()=>{
  let TAX = '1.13';
  let input = '20';
  let component: LabThreeComponent;
  let mockFormBuilder = jasmine.createSpyObj('FormBuilder', ['group']);
  it("should return a Number",()=>{
    component = new LabThreeComponent(mockFormBuilder);
    component.calculateTotal(input,TAX);
    expect(component.totalWithTax).toEqual(22.599999999999998);   
  })
});


describe("when using calculateTotal function with a negative number", ()=>{
  let TAX = '1.13';
  let input = '-20';
  let component: LabThreeComponent;
  let mockFormBuilder = jasmine.createSpyObj('FormBuilder', ['group']);
  it("should return a negative number which is not valid",()=>{
    component = new LabThreeComponent(mockFormBuilder);
    component.calculateTotal(input,TAX);
    expect(component.totalWithTax).toEqual(-22.599999999999998);   
  })
});