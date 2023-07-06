import java.util.*;
import java.lang.*;
public class firstAndLastEle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        int[] arr = new int[]{0,0,1,1,2,2,2,2};
        int k = 18;
        int first = firstPos(0,arr.length-1,arr,k);
        int last = lastPos(0,arr.length-1,arr,k);

        for(int i:arr) System.out.print(i+",");
        System.out.println();

        System.out.println("First Occurence is: "+first);
        System.out.println("Last Occurence is: "+last);
        System.out.println("Total number of Occurences: "+(last-first+1));
    }

    static int firstPos(int low, int high, int[] arr, int k){
        //base case
        if(low>high){
            return -1;
        }

        //processing
        int mid = low + (high-low)/2;
        if(arr[mid]<k){
            return firstPos(mid+1,high,arr,k);
        }
        else{
            int res = firstPos(low,mid-1,arr,k);
            if(res==-1){
                return mid;
            }
            else{
                return res;
            }
        }
    }
    static int lastPos(int low, int high, int[] arr, int k){
//        System.out.println("low: "+low+" high: "+high);
        //base case
        if(low>high){
            return -1;
        }

        //processing
        int mid = low + (high-low)/2;

        if(arr[mid]>k){
            return lastPos(low,mid-1,arr,k);
        }
        else{
            int res = lastPos(mid+1,high,arr,k);
            if(res==-1){
                if(arr[mid]!=k)return -1;
                return mid;
            }
            else return res;
        }
    }
}
