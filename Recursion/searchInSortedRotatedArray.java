public class searchInSortedRotatedArray {
    public static void main(String[] args) {
        int[] arr = {2,3,5,8};
        int k = -1;

        int pivot = pivotElement(0,arr.length-1,arr);
        int ans = -1;
        if(k==arr[pivot])ans=pivot;
        else if(k>=arr[0])ans = binarySearch(0,pivot-1,k,arr);
        else ans=binarySearch(pivot,arr.length-1,k,arr);
//        System.out.println("pivot: "+pivot);
        System.out.println(ans);
    }

    static int binarySearch(int low,int high,int k, int[] arr){
//        System.out.println("low:"+low+"   high:"+high);
        if(low>high)return -1;

        int mid = low + (high-low)/2;

        if(arr[mid]==k)return mid;
        else if(arr[mid]>k)return binarySearch(low,mid-1,k,arr);
        else return binarySearch(mid+1,high,k,arr);
    }

    static int pivotElement(int low, int high, int[] arr){
        if(low>high)return -1;

        if(low==high)return low;

        int mid = low + (high-low)/2;

        if(arr[mid]>=arr[0])return pivotElement(mid+1,high,arr);
        else return pivotElement(low,mid,arr);
    }
}
