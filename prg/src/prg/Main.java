package prg;
import java.util.Scanner;

 class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Person person1 = new Person("Kate","Jones",27,1.6,50.0);
		Person person2 = new Person("John","Chiristopher","Smith",65,1.75,80.0);
		Car car =new Car("Ferrari","Red");
		car.setOwner(person1);
		person1.buy(car);

		Bicycle bicycle = new Bicycle("Bianchi","Green");
		bicycle.setOwner(person2);
		person2.buy(bicycle);

		System.out.println("【Car Info】");
		car.printData();
		System.out.println("------------------------");
		System.out.println("【Car owner Info】");
		car.getOwner().printData();
		System.out.print("Enter distance to move:");
		int carDistance =scanner.nextInt();
		car.run(carDistance);
		System.out.println("------------------------");
		System.out.print("Enter amount to refuel:");
		int litre=scanner.nextInt();
		car.charge(litre);


		System.out.println("========================");
		System.out.println("【Bicycle Info】");
		bicycle.printData();
		System.out.println("------------------------");
		bicycle.getOwner().printData();
		System.out.print("Enter distance to move:");
		int bicycleDistance = scanner.nextInt();
		bicycle.run(bicycleDistance);

	}

}
