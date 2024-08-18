#include <cstdlib> 
#include <iostream> 
#include <time.h> 
#include<vector>
#include<map>
using namespace std;
void func(string str)
{
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] == '"')
        {
            string temp;
            int j = i + 1;
            while (str[j] != '"')
            {
                temp.push_back(str[j]);
                j++;
            }
            if (temp == "temp_c")
            {
                cout << "temp_c " << j + 2 << " " << j + 5 << endl;
            }
            if (temp == "wind_kph")
                cout << "wind_kph " << j + 2 << " " << j + 5 << endl;
            if (temp == "cloud")
                cout << "cloud " << j + 2 << " " << j + 4 << endl;
            i = j + 1;
        }
    }
}

vector<string> cities{"comilla", "Dhaka", "Khulna", "rajshahi", "hello", "asd", "wedu"};
void randomcity()
{
    map<int, bool> m;
    while (1)
    {
        srand(time(0));
        int pick = rand() % cities.size();
        if (m[pick] != true)
            cout << cities[pick] << endl;
        m[pick] = true;
        if (m.size() == 3)
            break;
    }
}
int main()
{
    string str;
    while(cin>>str)
    {
        cout<<"\""<<str<<"\""<<",";
    }
}