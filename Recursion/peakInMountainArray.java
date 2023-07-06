public class peakInMountainArray {
    public static void main(String[] args) {
        int[] arr = new int[]{24,69,100,99,79,78,677,36,26,19};

        int peak = peakElement(0,arr.length-1,arr);
        System.out.println("Peak element is : "+arr[peak]+"\nwith index: "+peak);
    }

    static int peakElement(int low, int high, int[] arr){
        //base case
        if(low>high)
            return -1;

        //processing
        int mid = low + (high-low)/2;

        if(arr[mid]>arr[mid+1] && arr[mid]>arr[mid-1]){
            return mid;
        }
        else if(arr[mid]<arr[mid+1]){
            return peakElement(mid+1,high,arr);
        }
        else{
            return peakElement(low,mid-1,arr);
        }
    }
}
