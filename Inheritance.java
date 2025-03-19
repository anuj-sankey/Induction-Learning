class Addition {
    public void add() {
        int x = 10, y = 20;
        System.out.println(x + y);
    }
}

class Substraction extends Addition {  
    void sub() {
        int y = 30, z = 10;
        System.out.println(y - z);
    }
}

class Multiplication extends Substraction {  
    void multi() {
        int y = 30, z = 20;
        System.out.println(y * z);
    }
}

class Inheritance {
    public static void main(String[] args) {
        Multiplication obj = new Multiplication();
        obj.add();  
        obj.sub();  
        obj.multi(); 
    }
}
