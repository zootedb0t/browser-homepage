import requests

APIURL = "https://wallhaven.cc/api/v1/search?q=anime&sorting=random&atleast=1920x1080"

server_response = requests.get(APIURL)


def get_file_url():
    """
    Return image url
    """
    if server_response.status_code == 200:
        return server_response.json()["data"][0].get("path")
    return "https://w.wallhaven.cc/full/3k/wallhaven-3k6ply.png"


file_url = get_file_url()
r = requests.get(file_url)

with open("docs/images/imageofday.png", "wb") as f:
    f.write(r.content)
