import java.util.*;

public class Cleric{
	String name;
	int hp=50;
	final int MAX_HP=50;
	int mp=10;
	final int MAX_MP=10;

	public void selfAid() {
		System.out.println(this.name+"はセルフエイドを唱えた");
		this.mp-=5;
		this.hp=this.MAX_HP;
		System.out.println("HPがMAXまで回復した。");
	}
	public int pray(int sec) {
		System.out.println(this.name+"は"+sec+"秒店に祈った");
		int recover = new Random().nextInt(3)+sec;
		int recoverActual = Math.min(MAX_MP-this.mp, recover);

		this.mp+=recoverActual;
		System.out.println("MPが"+recoverActual+"回復した");
		return recoverActual;

	}

}