import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()


from sales_rest.models import AutomobileVO


def poll(repeat=True):
    while True:
        try:
            response = requests.get(
                "http://inventory-api:8000/api/automobiles/"
                )
            content = json.loads(response.content)
            for automobile in content["autos"]:
                AutomobileVO.objects.update_or_create(
                    vin=automobile["vin"],
                    defaults={
                        "import_href": automobile["href"],
                    },
                )
            print('Sales poller polling for data')
        except Exception as e:
            print(e, file=sys.stderr)
        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
