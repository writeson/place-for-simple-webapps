import random
import math
from flask import Flask, jsonify, request
from flask import render_template

app = Flask(__name__)


@app.route("/version_<int:version>")
def home(version):
    return render_template("version_{version}/home.html".format(version=version))


@app.route("/presentation")
def presentation():
    return render_template("presentation/presentation.html")


@app.route("/api/process_data", methods=["GET"])
def process_data():
    # get the query string data
    string_data = request.args.get("string_data", "")
    try:
        number_data = float(request.args.get("number_data", "0"))
    except ValueError:
        number_data = 0

    # process the data
    response = {
        "strings": [
            [string_data.lower(), string_data.upper(), string_data.swapcase()],
            [
                string_data.title(),
                string_data.capitalize(),
                "".join(random.sample(string_data, len(string_data))),
            ],
            [
                sum(map(ord, string_data)),
                "##{}##".format(string_data),
                "{}?".format(string_data),
            ],
        ],
        "numbers": [
            [
                number_data,
                round(number_data * number_data, 3),
                round(number_data ** 2, 3),
            ],
            [
                round(number_data / 3, 3),
                round(number_data - 2, 3),
                round(number_data + 4, 3),
            ],
            [
                number_data + random.randint(1, 100),
                round(number_data * number_data // 2, 3),
                round(number_data * math.pi, 3),
            ],
        ],
    }
    return jsonify(response)


app.run(host="0.0.0.0", debug=True)
