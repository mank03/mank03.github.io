#include "givenA3.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void readFromFile (char fName [30], int country [COUNTRIES][MEDALCAT], char countryNames [COUNTRIES][MAX_LENGTH_CNAME])
{
    FILE* inputFile = NULL;

    printf("Opening file tokyoOlympics.txt\n");
    inputFile = fopen(fName, "r");
    
    if(inputFile == NULL)
    {
        printf("Error. File cannot be opened.\n");
        exit(0);
    }

    for(int i=0; i<=10; i++)
    {
        fscanf(inputFile, "%s %d %d %d", countryNames[i], &country[i][0], &country[i][1], &country[i][2]);
    }
    for(int i=0; i<=10; i++)
    {
        int sum = country[i][0] + country[i][1] + country[i][2];
        printf("%s %d\n", countryNames[i], sum);
    }


    //fscanf(inputFile, "%s %d %d %d", countryNames[0], &country[0][0], &country[0][1], &country[0][2]);
    //printf("%s %d %d %d", countryNames[0], country[0][0], country[0][1], country[0][2]);
    
    fclose(inputFile);

}
void findTotalPerCountry (int country [COUNTRIES] [MEDALCAT], int totalAllCountries [COUNTRIES])
{
    printf("In findTotalPerCountry - wiil complete by Nov 11th\n");
}
int findTotalPerMedal (int country [COUNTRIES][MEDALCAT], int totalAllMedals [MEDALCAT], int * whichMedal)
{
    printf("In findTotalPerMedal - wiil complete by Nov 12th\n");
    return 1;
}
void hHistogram (char countryNames [COUNTRIES][MAX_LENGTH_CNAME], int totalMedals[COUNTRIES])
{
    printf("In hHistogram - wiil complete by Nov 12th\n");
}
int searchCountry (char countryName [MAX_LENGTH_CNAME], char countryNames [COUNTRIES][MAX_LENGTH_CNAME], int totalAllCountries [COUNTRIES])
{
    printf("In searchCountry - wiil complete by Nov 12th\n");
    return 1;
}
void rankTopThreeByTotal (int totalMedals[COUNTRIES], char countryNames [COUNTRIES][MAX_LENGTH_CNAME])
{
    printf("In rankTopThreeByTotal - wiil complete by Nov 12th\n");
}
void rankTopThreeByMedal (int country [COUNTRIES] [MEDALCAT], char countryNames [COUNTRIES][MAX_LENGTH_CNAME])
{
    printf("In rankTopThreeByMedal - wiil complete by Nov 12th\n");
}
int findAllWithNoXMedals (int country [COUNTRIES] [MEDALCAT], int indexMedal, int indexOfCountries [COUNTRIES])
{
    printf("In findAllWithNoXMedals - wiil complete by Nov 12th\n");
    return 1;
}
int findAllWithOnlyXMedals (int country [COUNTRIES][MEDALCAT], int indexMedal, int indexOfCountries [COUNTRIES])
{
    printf("In findAllWithOnlyXMedals - wiil complete by Nov 13th\n");
    return 1;
}
int findCountryIndexWithMinOrMaxLength (int minOrMax, char countryNames [COUNTRIES][MAX_LENGTH_CNAME])
{
    printf("In findCountryIndexWithMinOrMaxLength - wiil complete by Nov 13th\n");
    return 1;
}

/* You must uncomment the below prototype if you do the additional 10% task
 
void vHistogram (char countryNames [COUNTRIES][MAX_LENGTH_CNAME], int totalMedals[COUNTRIES]);
*/
