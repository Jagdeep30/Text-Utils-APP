import java.util.Scanner;

public class sqrt {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int sqr = squareRoot(0,n,n);
        System.out.println("Square root of given number is : "+sqr);
    }

    static int squareRoot(int low, int high, int n){
        //base case
        if(low>high)return -1;

        //processing
        int mid = low + (high-low)/2;
//        System.out.println("mid:"+mid);
        int sq = n/mid;

        if(sq==mid)return mid;
        else if(sq<mid){
            return squareRoot(low,mid-1,n);
        }
        else{
            int ans = squareRoot(mid+1,high,n);
            if(ans==-1)return mid;
            else return ans;
        }
    }
}
