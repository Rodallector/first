function shell(v, n)
{

	var gap, i, j, temp;

	for (gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
	{
		for (i = gap; i < n; i++)
		{
			for (j=i-gap; j>=0 && v[j]>v[j+gap]; j-=gap)
			{
				temp = v[j];
				v[j] = v[j+gap];
				v[j+gap] = temp;
			}
		}
	}

}
var a = [5, 9, 1, 0, 7, 4, 3, 8, 2, 6];
