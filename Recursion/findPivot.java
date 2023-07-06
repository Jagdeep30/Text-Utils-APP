public class findPivot {
    public static void main(String[] args) {
        int[] arr = {3,8,10,17,1};
        int pivot = pivotElement(0,arr.length-1,arr);
        System.out.println("Pivot element is : "+arr[pivot]+ "\nPivot element index is : "+pivot);
    }

    static int pivotElement(int low, int high, int[] arr){
        //base case
        if(low>high)return -1;

        //processing
        int mid = low + (high-low)/2;
        if(low==high)return low;
        if(arr[mid]>=arr[0]){
            return pivotElement(mid+1,high,arr);
        }
        else{
            return pivotElement(low,mid,arr);
        }
    }
}
