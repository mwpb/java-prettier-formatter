class Simple {

  public static void main(String args[]) {
    System.out.println("Hello Java");

    switch (someParam) {
      case "A": //some codes
        break;
      default:
        break;
    }

    switch (someParam) {
      case "A" -> "AA";
      default -> null;
    }
    //this neither, on JDK 13
    switch (someParam) {
      case "A"-> {yield "AA";}
      default:
        yield null;
    }
  }
}
